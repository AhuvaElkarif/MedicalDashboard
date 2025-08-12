import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Badge,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { medications } from "../../data/sampleData";

const headerCells = [
  { label: "סטטוס בקשה", icon: <FilterListIcon fontSize="small" /> },
  { label: "תאריך עדכון", icon: <SortIcon fontSize="small" /> },
  { label: "", icon: <EmailIcon color="primary" /> },
  { label: "גורם מממן", icon: <FilterListIcon fontSize="small" /> },
  { label: "אחו/ת מתאמ/ת", icon: <FilterListIcon fontSize="small" /> },
  { label: "רופא/ה אחראי/ת", icon: <FilterListIcon fontSize="small" /> },
  { label: "", icon: <ChatBubbleOutlineIcon fontSize="small" /> },
  { label: "תאריך תוקף", icon: <SortIcon fontSize="small" /> },
  { label: "מס' טיפולים", icon: <SortIcon fontSize="small" /> },
  { label: "מינון שאושר", icon: <SortIcon fontSize="small" /> },
  { label: "מינון CATO", icon: <SortIcon fontSize="small" /> },
  { label: "פתיחת בקשה", icon: <SortIcon fontSize="small" /> },
  { label: "תרופה", icon: <SortIcon fontSize="small" /> },
  {   label: (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#999",
          lineHeight: "10px",
        }}
      >
        <span>ת.ז</span>
        <FilterListIcon fontSize="small" sx={{ color: "#999" ,height: "12px",}} />
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
          <ArrowDropDownIcon
            fontSize="small"
            sx={{
              color: "#999",
              marginBottom: "-8px",
              height: "12px",
            }}
          />
          <ArrowDropUpIcon
            fontSize="small"
            sx={{
              color: "#999",
              marginTop: "-8px",
              height: "12px",
            }}
          />
        </Box>
      </Box>
    ), icon: null},
  {
    label: (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#999",
          lineHeight: "10px",
        }}
      >
        <span>שם מטופל</span>
        <FilterListIcon fontSize="small" sx={{ color: "#999" ,height: "12px",}} />
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
          <ArrowDropDownIcon
            fontSize="small"
            sx={{
              color: "#999",
              marginBottom: "-8px",
              height: "12px",
            }}
          />
          <ArrowDropUpIcon
            fontSize="small"
            sx={{
              color: "#999",
              marginTop: "-8px",
              height: "12px",
            }}
          />
        </Box>
      </Box>
    ),
    icon: null,
  },
];

export default function RequestsTable2() {
  const getMessageCount = (row: any) => {
    return row.status === "בטיפול" ? 1 : 0;
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* כותרת וסינון בתוך גבול הטבלה */}
      <Box
        sx={{
          background: "#fff",
          border: "1.5px solid #2196f3",
          borderRadius: "8px 8px 0 0",
          borderBottom: "none",
          px: 2,
          pt: 1,
          pb: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton>
            <FilterListIcon color="primary" />
          </IconButton>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            color: "#2196f3",
            ml: 1,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: "1.1rem", color: "#2196f3" }} />
          מטופלים בעלי בקשה
        </Typography>
      </Box>
      {/* הטבלה עם גבול כחול ורקע לבן */}
      <TableContainer
        component={Paper}
        sx={{
          background: "#fff",
          border: "1.5px solid #2196f3",
          borderRadius: "0 0 8px 8px",
          borderTop: "none",
          width: "100%",
          overflowX: "auto",
          "& th": {
            padding: "2px 6px",
            fontSize: "0.68rem",
          },
          "& td": {
            padding: "2px 4px",
            fontSize: "0.65rem",
          },
          "@media (max-width: 600px)": {
            "& th, & td": {
              padding: "4px 6px",
              fontSize: "0.8rem",
            },
          },
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              {headerCells.map((cell, idx) => (
                <TableCell key={idx} align="center">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                    }}
                  >
                    {cell.label}
                    {cell.icon}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {medications.map((row, idx) => (
              <TableRow
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? "#f5f5f5" : "inherit",
                }}
              >
                <TableCell align="center">
                  <Select
                    value={row.status}
                    size="small"
                    sx={{
                      background:
                        row.status === "בטיפול"
                          ? "#e3e9fd"
                          : row.status === "נדחתה"
                          ? "#f8d7da"
                          : row.status === "אושרה"
                          ? "#d4edda"
                          : row.status === "מושהה"
                          ? "#fff9c4"
                          : "#e3e9fd",
                      color: "#90a4ae",
                      fontWeight: 500,
                      fontSize: "1rem",
                      borderRadius: "20px",
                      minWidth: 110,
                      height: 40,
                      ".MuiSelect-select": {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 18px 0 12px",
                      },
                      ".MuiOutlinedInput-notchedOutline": { border: "none" },
                      ".MuiOutlinedInput-root": { padding: 0 },
                      textAlign: "right",
                    }}
                    displayEmpty
                    disabled
                  >
                    <MenuItem
                      value={row.status}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        color: "#90a4ae",
                        fontWeight: 500,
                        fontSize: "1rem",
                        background: "transparent",
                      }}
                    >
                      {/* אייקון select בצד שמאל */}
                      <svg
                        style={{
                          marginLeft: 6,
                          width: 18,
                          height: 18,
                          color: "#90a4ae",
                        }}
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                      {row.status}
                    </MenuItem>
                  </Select>
                </TableCell>
                <TableCell align="center">{row.updateDate}</TableCell>
                <TableCell align="center">
                  <EmailIcon color="primary" />
                </TableCell>
                <TableCell align="center">{row.requesterType}</TableCell>
                <TableCell align="center">{row.requester}</TableCell>
                <TableCell align="center">{row.doctor}</TableCell>
                <TableCell align="center">
                  <Badge
                    badgeContent={getMessageCount(row)}
                    color="success"
                    overlap="circular"
                    anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    sx={{
                      "& .MuiBadge-badge": {
                        fontSize: "0.7rem",
                        minWidth: 18,
                        height: 18,
                        borderRadius: "50%",
                      },
                    }}
                  >
                    <ChatBubbleOutlineIcon style={{ color: "#888" }} />
                  </Badge>
                </TableCell>
                <TableCell align="center">{row.requestDate}</TableCell>
                <TableCell align="center">{row.treatments}</TableCell>
                <TableCell align="center">{row.dosage}</TableCell>
                <TableCell align="center">{row.cato}</TableCell>
                <TableCell align="center">{row.packageDate}</TableCell>
                <TableCell align="center">{row.medication}</TableCell>
                <TableCell align="center">{row.patientId}</TableCell>
                <TableCell align="center">{row.patient}</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* פאגינציה בתוך גבולות הטבלה */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderTop: "1px solid #e0e0e0",
            px: 2,
            py: 1,
            background: "#fff",
            borderRadius: "0 0 8px 8px",
            gap: 0.5,
          }}
        >
          <IconButton size="small" sx={{ color: "#bbb" }}>
            <KeyboardDoubleArrowLeftIcon fontSize="small" />
          </IconButton>
          <Typography
            sx={{
              fontSize: "0.95rem",
              color: "#bbb",
              mx: 0.5,
              border: "1px solid #ddd",
              borderRadius: "50px",
              px: 1.2,
              py: 0.1,
              minWidth: 24,
              textAlign: "center",
              background: "#fff",
              fontWeight: 400,
            }}
          >
            1
          </Typography>
          <Typography sx={{ fontSize: "0.95rem", color: "#bbb", mx: 0.5 }}>
            עבור לדף
          </Typography>
          <IconButton size="small" sx={{ color: "#bbb" }}>
            <KeyboardDoubleArrowRightIcon fontSize="small" />
          </IconButton>
        </Box>
      </TableContainer>
    </Box>
  );
}
