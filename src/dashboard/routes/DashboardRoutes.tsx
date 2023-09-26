import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { InicioPage } from "../pages/InicioPage";
import { PeliculasPage } from "../pages/PeliculasPage";
import { NotFoundPage } from "../pages/NotFoundPage";
// import { DataTableExample } from "../pages/DataTableExample";

export const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/peliculas" element={<PeliculasPage/>} />
        <Route path="/funnel" element={<PeliculasPage/>} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </DashboardLayout>
  );
};
