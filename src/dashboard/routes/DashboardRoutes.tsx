import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { InicioPage } from "../pages/InicioPage";
import { CanalesPage } from "../pages/CanalesPage";
import { PeliculasPage } from "../pages/PeliculasPage";
import { SeriesPage } from "../pages/SeriesPage"; 
import { InfraestructuraPage } from "../pages/InfraestructuraPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/canales" element={<CanalesPage/>} />
        <Route path="/peliculas" element={<PeliculasPage/>} />
        <Route path="/series" element={<SeriesPage/>} />
        <Route path="/infraestructura" element={<InfraestructuraPage/>} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </DashboardLayout>
  );
};
