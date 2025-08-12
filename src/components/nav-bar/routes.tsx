import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage.component";
import Layout from "../pages/layout/Layout.component";

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<></>} />
        <Route path="/calendar" element={<></>} />
        <Route path="/analytics" element={<></>} />
        <Route path="/reports" element={<></>} />
        <Route path="/settings" element={<></>} />
        <Route path="/more" element={<></>} />
      </Routes>
    </Layout>
  );
}
