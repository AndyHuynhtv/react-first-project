import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { HomeDetail } from "./pages/HomeDetail";
export default function HomeRouter() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path=":id" element={<HomeDetail />} />
    </Routes>
  );
}
