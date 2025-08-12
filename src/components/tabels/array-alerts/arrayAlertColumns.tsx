import { IconButton } from "@mui/material";
import { Add, Sort } from "@mui/icons-material";
import type { TableColumn } from "../../../types/types";
import { tableStyles } from "../../../styles/tableStyles";
import { StatusCell } from "../../ui/table/StatusCell.component";

export const arrayAlertColumns: TableColumn[] = [
  {
    key: "actions",
    label: "",
    width: "3%",
    render: () => (
      <IconButton sx={tableStyles.iconButton}>
        <Add sx={{ fontSize: "0.7rem" }} />
      </IconButton>
    ),
  },
  {
    key: "patientName",
    label: "עבור",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    width: "16%",
  },
  
  {
    key: "idNumber",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    label: "ת.ז",
    width: "8%",
  },
  {
    key: "medicine",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    label: "תרופה",
    width: "10%",
  },
  {
    key: "alertName",
    label: "שם התראה",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    width: "16%",
  },
  {
    key: "alertDescription",
    label: "תיאור התראה",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    width: "18%",
  },
  {
    key: "status",
    label: "סטטוס",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    width: "6%",
    render: (value) => <StatusCell status={value} />,
  }
];
