import React from "react";
import { Select, MenuItem } from "@mui/material";
import { getStatusConfig } from "../../../utils/statusUtils";

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
        minWidth: 40,
        height: 14,
        fontSize: "0.5rem",
        background: statusConfig.background,
        color: statusConfig.color,
        fontWeight: 500,
        direction: "rtl",
        ".MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "0 6px 0 16px",
          minHeight: "14px",
          lineHeight: "1",
        },
        ".MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        ".MuiOutlinedInput-root": {
          padding: 0,
          fontSize: "0.5rem",
        },
        ".MuiSelect-icon": {
          fontSize: "0.7rem",
          left: 3,
          right: "auto",
        },
        textAlign: "right",
      }}
      displayEmpty
      disabled={disabled}
    >
      <MenuItem
        value={status}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
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
