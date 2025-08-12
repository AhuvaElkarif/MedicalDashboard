import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage.component";
import Layout from "../pages/layout/Layout.component";

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<HomePage />} />
        <Route path="/calendar" element={<HomePage />} />
        <Route path="/analytics" element={<HomePage />} />
        <Route path="/reports" element={<HomePage />} />
        <Route path="/settings" element={<HomePage />} />
        <Route path="/more" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
