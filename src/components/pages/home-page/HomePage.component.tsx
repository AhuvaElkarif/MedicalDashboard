import ButtonSection from "../../button-section/ButtonSection.component";
import { AlertsTable } from "../../tabels/alert-table/AlertTable.component";
import { ArrayAlertsTable } from "../../tabels/array-alerts/ArrayAlerts.component";
import { RequestsTable } from "../../tabels/requestTable/RequestTable.component";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <ButtonSection />
      <RequestsTable />
      <AlertsTable/>
      <ArrayAlertsTable />
    </div>
  );
};
export default HomePage;
