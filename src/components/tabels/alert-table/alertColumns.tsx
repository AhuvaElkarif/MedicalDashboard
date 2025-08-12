import { IconButton } from "@mui/material";
import { ChatBubbleOutline, Add, Sort } from "@mui/icons-material";
import type { TableColumn } from "../../../types/types";
import { tableStyles } from "../../../styles/tableStyles";
import { SortableHeader } from "../../ui/table/SortableHeader.component";
import { StatusCell } from "../../ui/table/StatusCell.component";
import { MessageBadgeCell } from "../../ui/table/MessageBadgeCell.component";

export const alertColumns: TableColumn[] = [
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
    label: <SortableHeader label="שם מטופל" />,
    width: "8%",
  },
  {
    key: "idNumber",
    label: <SortableHeader label="ת.ז" />,
    width: "8%",
  },
  {
    key: "medicine",
    label: <SortableHeader label="תרופה" />,
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
    key: "treatmentDescription",
    label: "טיפול בהתראה",
    width: "18%",
  },
  {
    key: "treatmentDate",
    label: "טיפול בתאריך",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    width: "8%",
  },
  {
    key: "status",
    label: "סטטוס",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    width: "6%",
    render: (value) => <StatusCell status={value} />,
  },
  {
    key: "messages",
    label: "",
    width: "3%",
    icon: <ChatBubbleOutline sx={{ fontSize: "0.65rem" }} />,
    render: (_, row) => <MessageBadgeCell row={row} />,
  },
];
