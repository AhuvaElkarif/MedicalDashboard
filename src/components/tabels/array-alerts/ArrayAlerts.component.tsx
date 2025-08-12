import { arrayAlertsData } from "../../../data/arrayAlertsData";
import { ReusableTable } from "../../ui/table/ReusableTable.component";
import { arrayAlertColumns } from "./arrayAlertColumns";

export const ArrayAlertsTable: React.FC = () => {
  const tableConfig = {
    columns: arrayAlertColumns,
    title: "התראות מערך",
    showPagination: true,
    showFilters: true,
    alternatingRows: true,
  };

  return <ReusableTable data={arrayAlertsData} config={tableConfig} />;
};
