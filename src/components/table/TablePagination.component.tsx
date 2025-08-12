import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { tableStyles } from "../../styles/tableStyles";
import type { PaginationConfig } from "../../types/types";

interface TablePaginationProps extends PaginationConfig {}

export const TablePagination: React.FC<TablePaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <Box sx={tableStyles.paginationContainer}>
    <IconButton
      size="small"
      sx={{ color: "#bbb" }}
      disabled={currentPage <= 1}
      onClick={() => onPageChange(currentPage - 1)}
    >
      <KeyboardDoubleArrowRight fontSize="small" />
    </IconButton>
    <Typography sx={{ fontSize: "0.95rem", color: "#bbb", mx: 0.5 }}>
      עבור לדף
    </Typography>
    <Typography sx={tableStyles.pageNumber}>{currentPage}</Typography>
    <IconButton
      size="small"
      sx={{ color: "#bbb" }}
      disabled={currentPage >= totalPages}
      onClick={() => onPageChange(currentPage + 1)}
    >
      <KeyboardDoubleArrowLeft fontSize="small" />
    </IconButton>
  </Box>
);
