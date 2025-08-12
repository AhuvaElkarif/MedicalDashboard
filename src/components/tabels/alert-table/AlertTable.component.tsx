import { alertsData } from "../../../data/alertData";
import { ReusableTable } from "../../ui/table/ReusableTable.component";
import { alertColumns } from "./alertColumns";

export const AlertsTable: React.FC = () => {
  const tableConfig = {
    columns: alertColumns,
    title: "התראות",
    showPagination: true,
    showFilters: true,
    alternatingRows: true,
  };

  return <ReusableTable data={alertsData} config={tableConfig} />;
};
