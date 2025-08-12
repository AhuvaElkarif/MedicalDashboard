import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { FilterList, ChevronLeft } from "@mui/icons-material";
import { TablePagination } from "./TablePagination.component";
import type { PaginationConfig, TableConfig } from "../../../types/types";
import { tableStyles } from "../../../styles/tableStyles";

interface ReusableTableProps {
  data: any[];
  config: TableConfig;
  pagination?: PaginationConfig;
}

export const ReusableTable: React.FC<ReusableTableProps> = ({
  data,
  config,
  pagination,
}) => {
  return (
    <Box sx={tableStyles.container}>
      <Box sx={tableStyles.headerContainer}>
        <Typography sx={tableStyles.title}>
          {config.title}
          <ChevronLeft sx={{ fontSize: "0.9rem", color: "#2196f3" }} />
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {config.showFilters && (
            <IconButton sx={tableStyles.iconButton}>
              <FilterList color="primary" />
            </IconButton>
          )}
        </Box>
      </Box>
      
      <TableContainer component={Paper} sx={tableStyles.tableContainer}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {config.columns.map((column, idx) => (
                <TableCell 
                  key={idx} 
                  align={column.align || "right"}
                  style={{ 
                    width: column.width || `${100 / config.columns.length}%`,
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                  }}
                >
                  <Box sx={tableStyles.headerCell}>
                    {column.label}
                    {column.icon}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow
                key={idx}
                style={{
                  backgroundColor: config.alternatingRows && idx % 2 === 0
                    ? "#f8f9ff"
                    : "transparent",
                }}
              >
                {config.columns.map((column, colIdx) => (
                  <TableCell 
                    key={colIdx} 
                    align={column.align || "right"}
                    style={{ 
                      width: column.width || `${100 / config.columns.length}%`,
                    }}
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {config.showPagination && pagination && (
          <TablePagination {...pagination} />
        )}
      </TableContainer>
    </Box>
  );
};