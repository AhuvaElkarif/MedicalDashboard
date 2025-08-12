import { IconButton } from "@mui/material";
import { Email, Add, Sort, ChatBubbleOutline } from "@mui/icons-material";
import type { TableColumn } from "../../types/types";
import { MessageBadgeCell } from "../table/MessageBadgeCell.component";
import { SortableHeader } from "../table/SortableHeader.component";
import { tableStyles } from "../../styles/tableStyles";
import { StatusCell } from "../table/StatusCell.component";

export const requestColumns: TableColumn[] = [
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
    key: "patient",
    label: <SortableHeader label="שם מטופל" />,
    width: "8%",
  },
  {
    key: "patientId",
    label: <SortableHeader label="ת.ז" />,
    width: "6%",
  },
  {
    key: "medication",
    label: <SortableHeader label="תרופה" />,
    width: "7%",
  },
  {
    key: "packageDate",
    label: "פתיחת בקשה",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    width: "6%",
  },
  {
    key: "cato",
    label: "מינון CATO",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    width: "6%",
  },
  {
    key: "dosage",
    label: "מינון שאושר",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    width: "6%",
  },
  {
    key: "treatments",
    label: "מס' טיפולים",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    width: "5%",
  },
  {
    key: "requestDate",
    label: "תאריך תוקף",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    width: "6%",
  },
  {
    key: "messages",
    label: "",
    icon: <ChatBubbleOutline sx={{ fontSize: "0.65rem" }} />,
    width: "3%",
    render: (_, row) => <MessageBadgeCell row={row} />,
  },
  {
    key: "doctor",
    label: <SortableHeader label="רופא/ה אחראי/ת" />,
    width: "9%",
  },
  {
    key: "requester",
    label: <SortableHeader label="אחו/ת מתאמ/ת" />,
    width: "9%",
  },
  {
    key: "requesterType",
    label: <SortableHeader label="גורם מממן" />,
    width: "7%",
  },
  {
    key: "email",
    label: "",
    icon: <Email sx={{ color: "primary.main", fontSize: "0.65rem" }} />,
    width: "3%",
    render: () => (
      <IconButton sx={tableStyles.iconButton}>
        <Email sx={{ color: "primary.main", fontSize: "0.7rem" }} />
      </IconButton>
    ),
  },
  {
    key: "updateDate",
    label: "תאריך עדכון",
    icon: <Sort sx={{ fontSize: "0.65rem" }} />,
    width: "6%",
  },
  {
    key: "status",
    label: <SortableHeader label="סטטוס בקשה" />,
    width: "8%",
    render: (value) => <StatusCell status={value} />,
  },
];
