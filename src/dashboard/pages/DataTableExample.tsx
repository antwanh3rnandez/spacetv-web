import { useState, useEffect } from "react";
import { Movie, movieColumns } from "../clients/MovieColumns";
import { DataTable } from "../clients/data-table";

export const DataTableExample = ({ categoria }: { categoria: string }) => {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    const apiUrl = `https://spacetv-api.axol.dev/cuenta_api/peliculas/${categoria}/`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data.data)) // Cambia data.data para acceder a la propiedad correcta
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  return (
    <div className={"container mx-auto py-5"}>
      <DataTable columns={movieColumns} data={data} />
    </div>
  );
};
