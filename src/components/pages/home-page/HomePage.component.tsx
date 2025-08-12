import ButtonSection from "../../button-section/ButtonSection.component";
import { AlertsTable } from "../../tabels/alert-table/AlertTable.component";
import { RequestsTable } from "../../tabels/requestTable/RequestTable.component";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <>
      <ButtonSection />
      <RequestsTable />
      <AlertsTable/>
    </>
  );
};
export default HomePage;
