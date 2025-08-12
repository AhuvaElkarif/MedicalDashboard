import ButtonSection from "../button-section/ButtonSection.component";
import { RequestsTable } from "../requestTable/RequestTable.component";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <ButtonSection />
      <RequestsTable />
    </div>
  );
};
export default HomePage;
