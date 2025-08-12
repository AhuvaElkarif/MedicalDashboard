import type { SxProps, Theme } from "@mui/material/styles";

export const tableStyles: Record<string, SxProps<Theme>> = {
  container: {
    width: "100%",
  },

  headerContainer: {
    background: "#fff",
    border: "1px solid #2196f3",
    borderRadius: "6px 6px 0 0",
    borderBottom: "none",
    px: 1,
    py: 0.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "30px",
  },

  title: {
    fontWeight: 600,
    fontSize: "0.8rem",
    color: "#2196f3",
    ml: 0.5,
    display: "flex",
    alignItems: "center",
    gap: 0.25,
  },

  tableContainer: {
    padding: "8px 0",
    background: "#fff",
    border: "1px solid #2196f3",
    borderRadius: "0 0 6px 6px",
    borderTop: "none",
    width: "100%",
    maxWidth: "100%",
    overflowX: "auto",
    "& .MuiTable-root": {
      width: "100%",
      tableLayout: "fixed",
    },
    
    "& .MuiTableHead-root": {
      "& .MuiTableRow-root": {
        minHeight: "26px !important",
      },
      "& .MuiTableCell-root": {
        padding: { xs: "4px 6px !important", sm: "5px 8px !important" },
        fontSize: { xs: "0.7rem !important", sm: "0.75rem !important" },
        fontWeight: "600 !important",
        borderBottom: "1px solid #e3e7f1 !important",
        whiteSpace: "normal !important", 
        overflowWrap: "break-word !important",
        wordBreak: "break-word !important",
        lineHeight: "1.4 !important",
        height: "auto !important", 
        minHeight: { xs: "26px !important", sm: "28px !important" },
        verticalAlign: "middle !important",
        boxSizing: "border-box !important",
      },
    },
    
    "& .MuiTableBody-root": {
      "& .MuiTableRow-root": {
        minHeight: "20px !important",
        "&:hover": {
          backgroundColor: "#f5f7ff !important",
        },
      },
      "& .MuiTableCell-root": {
        padding: { xs: "2px 4px !important", sm: "3px 5px !important" },
        fontSize: { xs: "0.65rem !important", sm: "0.7rem !important" },
        borderBottom: "1px solid #f0f0f0 !important",
        whiteSpace: "nowrap !important",
        lineHeight: "1.2 !important",
        height: "auto !important",
        minHeight: "20px !important",
        verticalAlign: "middle !important",
        overflow: "hidden !important",
        textOverflow: "ellipsis !important",
        boxSizing: "border-box !important",
      },
    },
    
    "@media (max-width: 768px)": {
      "& .MuiTableHead-root .MuiTableCell-root": {
        padding: "3px 5px !important",
        fontSize: "0.7rem !important",
        minHeight: "24px !important",
      },
      "& .MuiTableBody-root .MuiTableCell-root": {
        padding: "2px 4px !important",
        fontSize: "0.65rem !important",
        minHeight: "20px !important",
      },
    },
  },

  paginationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    borderTop: "1px solid #e0e0e0",
    px: 1,
    background: "#fff",
    borderRadius: "0 0 6px 6px",
    minHeight: "20px",
  },

  pageNumber: {
    fontSize: "0.7rem",
    color: "#888",
    mx: 0.25,
    border: "1px solid #ddd",
    borderRadius: "4px",
    px: 0.75,
    py: 0.25,
    minWidth: 20,
    background: "#fff",
    fontWeight: 400,
  },

  iconButton: {
    padding: "1px",
    minWidth: "14px",
    minHeight: "14px",
    "& .MuiSvgIcon-root": {
      fontSize: "0.75rem",
    },
  },

  messageBadge: {
    display: "flex",
    alignItems: "center",
    "& .MuiBadge-badge": {
      fontSize: "0.45rem",
      minWidth: "10px",
      height: "10px",
      padding: "0 1px",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "0.7rem",
    },
  },

  headerCell: {
    display: "flex",
    alignItems: "center",
    gap: 0.125,
    minHeight: "14px",
    fontSize: "0.6rem",
    "& .MuiSvgIcon-root": {
      fontSize: "0.65rem",
    },
  },

  statusSelect: {
    borderRadius: "12px",
    minWidth: 80,
    height: 20,
    fontSize: "0.6rem",
    ".MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      padding: "0 12px 0 6px",
      minHeight: "14px",
      lineHeight: "1.2",
    },
    ".MuiOutlinedInput-notchedOutline": { border: "none" },
    ".MuiOutlinedInput-root": {
      padding: 0,
      fontSize: "0.6rem",
    },
    ".MuiSelect-icon": {
      fontSize: "0.75rem",
      right: 2,
    },
  },
};
