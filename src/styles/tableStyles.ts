// import type { SxProps, Theme } from '@mui/material/styles';

// export const tableStyles: Record<string, SxProps<Theme>> = {
//   container: {
//     width: "100%",
//   },
  
//   headerContainer: {
//     background: "#fff",
//     border: "1.5px solid #2196f3",
//     borderRadius: "8px 8px 0 0",
//     borderBottom: "none",
//     px: 2,
//     pt: 1,
//     pb: 1,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
  
//   title: {
//     fontWeight: 600,
//     fontSize: "1rem",
//     color: "#2196f3",
//     ml: 1,
//     display: "flex",
//     alignItems: "center",
//     gap: 0.5,
//   },
  
//   tableContainer: {
//     background: "#fff",
//     border: "1.5px solid #2196f3",
//     borderRadius: "0 0 8px 8px",
//     borderTop: "none",
//     width: "100%",
//     overflowX: "auto",
//     "& th": {
//       padding: "2px 6px",
//       fontSize: "0.68rem",
//     },
//     "& td": {
//       padding: "2px 4px",
//       fontSize: "0.65rem",
//     },
//     "@media (max-width: 600px)": {
//       "& th, & td": {
//         padding: "4px 6px",
//         fontSize: "0.8rem",
//       },
//     },
//   },
  
//   headerCell: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 0.5,
//   },
  
//   statusSelect: {
//     borderRadius: "20px",
//     minWidth: 110,
//     height: 40,
//     ".MuiSelect-select": {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: "0 18px 0 12px",
//     },
//     ".MuiOutlinedInput-notchedOutline": { border: "none" },
//     ".MuiOutlinedInput-root": { padding: 0 },
//     textAlign: "right",
//   },
  
//   paginationContainer: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     borderTop: "1px solid #e0e0e0",
//     px: 2,
//     py: 1,
//     background: "#fff",
//     borderRadius: "0 0 8px 8px",
//     gap: 0.5,
//   },
  
//   pageNumber: {
//     fontSize: "0.95rem",
//     color: "#bbb",
//     mx: 0.5,
//     border: "1px solid #ddd",
//     borderRadius: "50px",
//     px: 1.2,
//     py: 0.1,
//     minWidth: 24,
//     textAlign: "center",
//     background: "#fff",
//     fontWeight: 400,
//   },
// };
import type { SxProps, Theme } from '@mui/material/styles';

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
    minHeight: "28px",
  },
 
  title: {
    fontWeight: 600,
    fontSize: "0.75rem",
    color: "#2196f3",
    ml: 0.5,
    display: "flex",
    alignItems: "center",
    gap: 0.25,
  },
 
  tableContainer: {
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
    // <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignCenter
    //  MuiTableCell-sizeSmall css-wsxt5g-MuiTableCell-root"
    //  style="width: 8%;">ישראל ישראלי</td>
    "& .MuiTableHead-root, & .MuiTableCell-sizeSmall": {
      "& .MuiTableRow-root": {
        height: "24px !important",
      },
      "& .MuiTableCell-root": {
        padding: "2px 4px !important",
        fontSize: "0.6rem !important",
        fontWeight: "600 !important",
        backgroundColor: "#f8f9ff !important",
        borderBottom: "1px solid #e3e7f1 !important",
        whiteSpace: "nowrap !important",
        lineHeight: "1.1 !important",
        height: "24px !important",
        verticalAlign: "middle !important",
        boxSizing: "border-box !important",
      },
    },
    "& .MuiTableBody-root": {
      "& .MuiTableRow-root": {
        height: "22px !important",
        "&:hover": {
          backgroundColor: "#f5f7ff !important",
        },
      },
      "& .MuiTableCell-root": {
        padding: "1px 3px !important",
        fontSize: "0.55rem !important",
        borderBottom: "1px solid #f0f0f0 !important",
        whiteSpace: "nowrap !important",
        lineHeight: "1.1 !important",
        height: "22px !important",
        verticalAlign: "middle !important",
        overflow: "hidden !important",
        textOverflow: "ellipsis !important",
        boxSizing: "border-box !important",
      },
    },
    "@media (max-width: 768px)": {
      "& .MuiTableHead-root .MuiTableCell-root": {
        padding: "3px 5px !important",
        fontSize: "0.65rem !important",
        height: "28px !important",
      },
      "& .MuiTableBody-root .MuiTableCell-root": {
        padding: "2px 4px !important",
        fontSize: "0.6rem !important",
        height: "26px !important",
      },
    },
    "@media (max-width: 480px)": {
      "& .MuiTableHead-root .MuiTableCell-root": {
        padding: "4px 6px !important",
        fontSize: "0.7rem !important",
        height: "32px !important",
      },
      "& .MuiTableBody-root .MuiTableCell-root": {
        padding: "3px 5px !important",
        fontSize: "0.65rem !important",
        height: "30px !important",
      },
    },
  },
 
  statusSelect: {
    borderRadius: "12px",
    minWidth: 80,
    height: 24,
    fontSize: "0.55rem",
    ".MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 12px 0 8px",
      minHeight: "20px",
    },
    ".MuiOutlinedInput-notchedOutline": { border: "none" },
    ".MuiOutlinedInput-root": { 
      padding: 0,
      fontSize: "0.55rem",
    },
    textAlign: "center",
    background: "#e8f2ff",
  },
 
  paginationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    borderTop: "1px solid #e0e0e0",
    px: 1,
    py: 0.5,
    background: "#fff",
    borderRadius: "0 0 6px 6px",
    gap: 0.5,
    minHeight: "32px",
  },
 
  pageNumber: {
    fontSize: "0.65rem",
    color: "#888",
    mx: 0.25,
    border: "1px solid #ddd",
    borderRadius: "4px",
    px: 0.75,
    py: 0.25,
    minWidth: 20,
    textAlign: "center",
    background: "#fff",
    fontWeight: 400,
  },

  // עיצובים נוספים לאלמנטים קטנים
  iconButton: {
    padding: "1px",
    minWidth: "16px",
    minHeight: "16px",
    "& .MuiSvgIcon-root": {
      fontSize: "0.75rem",
    },
  },

  messageBadge: {
    "& .MuiBadge-badge": {
      fontSize: "0.45rem",
      minWidth: "12px",
      height: "12px",
      padding: "0 1px",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "0.75rem",
    },
  },

  compactButton: {
    minWidth: "auto",
    padding: "0px 2px",
    fontSize: "0.5rem",
    height: "16px",
  },

  headerCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 0.125,
    minHeight: "16px",
    fontSize: "0.55rem",
    "& .MuiSvgIcon-root": {
      fontSize: "0.7rem",
    },
  },
};