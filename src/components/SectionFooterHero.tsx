import { useEffect, useState } from 'react';
import axios from 'axios';
import { IconDeviceTv, IconMovie, IconRefresh, IconUsersGroup } from "@tabler/icons-react"
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
  } from "../components/ui/card"

export function SectionFooterHero() {

    const [countChannels, setCountChannels] = useState(0);
    const [countMovies, setCountMovies] = useState(0);
    const [countSeries, setCountSeries] = useState(0);


    useEffect(() => {
        const apiUrl = import.meta.env.VITE_COUNTS_CONTENT_URL;

        axios.get(apiUrl)
        .then((response) => {
            setCountChannels(response.data.data.channels);
            setCountMovies(response.data.data.movies);
            setCountSeries(response.data.data.episodes);
            
        })
        .catch((error) => {
            console.error("Error al obtener datos:", error);
        });
    }, []);

    return (
      <div
        className="grid gap-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 shadow-xl"
        style={{ fontFamily: "Poppins" }}
      >
        <Card className="opacity-100 rounded-none">
          <CardHeader className="items-center">
            <CardTitle>
              <IconRefresh size={64} />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-3">
            <div className="text-xl font-semibold text-muted-foreground">
              ACTUALIZACIONES
            </div>
            <p className="text-lg text-muted-foreground text-center font-light">
              Contenido nuevo todos los días hábiles y a veces fines de semana.
            </p>
          </CardContent>
        </Card>
        <Card className="opacity-100 rounded-none">
          <CardHeader className="items-center">
            <CardTitle>
              <IconDeviceTv size={64} />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-3">
            <div className="text-xl font-semibold text-muted-foreground">
              CANALES EN VIVO
            </div>
            <p className="text-lg text-muted-foreground text-center font-light">
              Más de {countChannels} canales en vivo de diversas categorías y
              países con PPE incluido.
            </p>
          </CardContent>
        </Card>
        <Card className="opacity-100 rounded-none">
          <CardHeader className="items-center">
            <CardTitle>
              <IconMovie size={64} />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-3">
            <div className="text-xl font-semibold text-muted-foreground">
              PELÍCULAS
            </div>
            <p className="text-lg text-muted-foreground text-center font-light">
              Más de {countMovies} películas de estreno y títulos clásicos del
              cine para todas las edades.
            </p>
          </CardContent>
        </Card>
        <Card className="opacity-100 rounded-none">
          <CardHeader className="items-center">
            <CardTitle>
              <IconUsersGroup size={64} />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-3">
            <div className="text-xl font-semibold text-muted-foreground">
              SERIES DE TV
            </div>
            <p className="text-lg text-muted-foreground text-center font-light">
              Más de {countSeries} episodios, trayendo los mejores y más nuevos
              títulos.
            </p>
          </CardContent>
        </Card>
      </div>
    );
}