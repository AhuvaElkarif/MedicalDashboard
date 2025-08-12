import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from "@mui/material";
import styles from "../requestTable/RequestTable.module.css"; // השתמשי ב-CSS הקיים
import RequestTablePagination from "../requestTable/RequestTablePagination";

export interface DataTableHeaderCell {
  label: React.ReactNode;
  icon?: React.ReactNode;
  key?: string;
}

export interface DataTableProps<T> {
  headerCells: DataTableHeaderCell[];
  rows: T[];
  renderRow: (row: T, idx: number) => React.ReactNode;
  rowsPerPage?: number;
}

export default function DataTable<T>({
  headerCells,
  rows,
  renderRow,
  rowsPerPage = 10,
}: DataTableProps<T>) {
  const [page, setPage] = useState(1);
  const pagedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Box className={styles.wrapper}>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table size="small" className={styles.table}>
          <TableHead>
            <TableRow>
              {headerCells.map((cell, idx) => (
                <TableCell key={cell.key || idx} align="center">
                  <div className={styles.headerCell}>
                    {cell.label}
                    {cell.icon}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pagedRows.map((row, idx) => renderRow(row, idx))}
          </TableBody>
        </Table>
        <Box className={styles.paginationBox}>
       <RequestTablePagination
/>
        </Box>
      </TableContainer>
    </Box>
  );
}