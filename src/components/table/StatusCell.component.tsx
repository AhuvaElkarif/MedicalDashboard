import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { getStatusConfig } from '../../utils/statusUtils';

interface StatusCellProps {
  status: string;
  disabled?: boolean;
  onChange?: (status: string) => void;
}

export const StatusCell: React.FC<StatusCellProps> = ({ 
  status, 
  disabled = true,
}) => {
  const statusConfig = getStatusConfig(status);
  
  return (
    <Select
      value={status}
      size="small"
      sx={{
        borderRadius: "10px",
        minWidth: 50,
        height: 12,
        fontSize: "0.5rem",
        background: statusConfig.background,
        color: statusConfig.color,
        fontWeight: 500,
        '.MuiSelect-select': {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 10px 0 6px",
          minHeight: "14px",
          lineHeight: "1",
        },
        '.MuiOutlinedInput-notchedOutline': { 
          border: "none" 
        },
        '.MuiOutlinedInput-root': { 
          padding: 0,
          fontSize: "0.5rem",
        },
        '.MuiSelect-icon': {
          fontSize: "0.7rem",
          right: 3,
        },
        textAlign: "center",
      }}
      displayEmpty
      disabled={disabled}
    >
      <MenuItem
        value={status}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.25,
          color: statusConfig.color,
          fontWeight: 500,
          fontSize: "0.5rem",
          background: "transparent",
          minHeight: "18px",
          padding: "1px 6px",
        }}
      >
        {status}
      </MenuItem>
    </Select>
  );
};