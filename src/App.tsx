import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/nav-bar/routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
