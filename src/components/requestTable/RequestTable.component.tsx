import React, { useState } from "react";
import type { TableConfig } from "../../types/types";
import { ReusableTable } from "../table/ReusableTable.component";
import { medications } from "../../data/sampleData";
import {requestColumns} from "./requsetData";

export const RequestsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const tableConfig: TableConfig = {
    columns: requestColumns,
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
