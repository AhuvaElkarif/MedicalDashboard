import React from 'react';
import { Box } from '@mui/material';
import { ArrowDropUp, ArrowDropDown, FilterList } from '@mui/icons-material';

interface SortableHeaderProps {
  label: string;
}

export const SortableHeader: React.FC<SortableHeaderProps> = ({ label }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      color: "#999",
      lineHeight: "10px",
    }}
  >
    <span>{label}</span>
    <FilterList fontSize="small" sx={{ color: "#999", height: "12px" }} />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "20px",
        justifyContent: "center",
        marginTop: "-2px",
      }}
    >
      <ArrowDropDown
        fontSize="small"
        sx={{
          color: "#999",
          marginBottom: "-8px",
          height: "12px",
        }}
      />
      <ArrowDropUp
        fontSize="small"
        sx={{
          color: "#999",
          marginTop: "-8px",
          height: "12px",
        }}
      />
    </Box>
  </Box>
);