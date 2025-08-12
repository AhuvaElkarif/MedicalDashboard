import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { getStatusConfig } from '../../utils/statusUtils';
import { tableStyles } from '../../styles/tableStyles';

interface StatusCellProps {
  status: string;
  disabled?: boolean;
}

export const StatusCell: React.FC<StatusCellProps> = ({ status, disabled = true }) => {
  const statusConfig = getStatusConfig(status);
  
  return (
    <Select
      value={status}
      size="small"
      sx={{
        ...tableStyles.statusSelect,
        background: statusConfig.background,
        color: statusConfig.color,
        fontWeight: 500,
        fontSize: "1rem",
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
          gap: 1,
          color: statusConfig.color,
          fontWeight: 500,
          fontSize: "1rem",
          background: "transparent",
        }}
      >
        <svg
          style={{
            marginLeft: 6,
            width: 18,
            height: 18,
            color: statusConfig.color,
          }}
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
        {status}
      </MenuItem>
    </Select>
  );
};
