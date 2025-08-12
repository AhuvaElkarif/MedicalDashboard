import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import {
  Email,
  Add,
  Sort,
  ChatBubbleOutline,
} from "@mui/icons-material";
import type { TableColumn, TableConfig } from "../../types/types";
import StatusCell from "./StatusCell";
import { MessageBadgeCell } from "../table/MessageBadgeCell.component";
import { SortableHeader } from "../table/SortableHeader.component";
import { ReusableTable } from "../table/ReusableTable.component";
import { medications } from "../../data/sampleData";
import { tableStyles } from "../../styles/tableStyles";

export const RequestsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const columns: TableColumn[] = [
    {
      key: "actions",
      label: "",
      width: "3%",
      render: () => (
        <IconButton sx={tableStyles.iconButton}>
          <Add />
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
      icon: <Sort fontSize="small" />,
      width: "6%",
    },
    {
      key: "cato",
      label: "מינון CATO",
      icon: <Sort fontSize="small" />,
      width: "6%",
    },
    {
      key: "dosage",
      label: "מינון שאושר",
      icon: <Sort fontSize="small" />,
      width: "6%",
    },
    {
      key: "treatments",
      label: "מס' טיפולים",
      icon: <Sort fontSize="small" />,
      width: "5%",
    },
    {
      key: "requestDate",
      label: "תאריך תוקף",
      icon: <Sort fontSize="small" />,
      width: "6%",
    },
    {
      key: "messages",
      label: "",
      icon: <ChatBubbleOutline fontSize="small" />,
      width: "3%",
      render: (_, row) => (
        <Box sx={tableStyles.messageBadge}>
          <MessageBadgeCell row={row} />
        </Box>
      ),
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
      icon: <Email color="primary" />,
      width: "3%",
      render: () => (
        <IconButton sx={tableStyles.iconButton}>
          <Email color="primary" />
        </IconButton>
      ),
    },
    {
      key: "updateDate",
      label: "תאריך עדכון",
      icon: <Sort fontSize="small" />,
      width: "6%",
    },
    {
      key: "status",
      label: <SortableHeader label="סטטוס בקשה" />,
      width: "8%",
      render: (value) => <StatusCell status={value} />,
    },
  ];

  const tableConfig: TableConfig = {
    columns,
    title: "מטופלים בעלי בקשה",
    showPagination: true,
    showFilters: true,
    alternatingRows: true,
  };

  const paginationConfig = {
    currentPage,
    totalPages,
    onPageChange: setCurrentPage,
  };

  return (
    <ReusableTable
      data={medications}
      config={tableConfig}
      pagination={paginationConfig}
    />
  );
};