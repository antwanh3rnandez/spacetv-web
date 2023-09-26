import { useState, useEffect } from "react";
import { 
  Card, 
} from "../../components/ui/card"


import { Footer } from "../../components/pages/Footer";

import { DataTableExample } from "./DataTableExample"
import { HeroPages } from "../../components/pages/HeroPages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export type Category = {
  id: string;
  category_type: string;
  category_name: string;
  parent_id: string;
  cat_order: string;
}

export type CategoryList = {
    data: Category[];
}

export const PeliculasPage = () => {

  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    const apiUrl = `https://spacetv-api.axol.dev/cuenta_api/categorias/movie/`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data.data)) // Cambia data.data para acceder a la propiedad correcta
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  const categories = data;

  return (
    <div className="hidden flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Películas"/>
        <div className="relative flex-1 space-y-4 sm:px-16 md:px-32 lg:px-64 mt-12">
          <div className='py-12'>
            <h1 className='mb-6 text-5xl text-center font-extralight'>
              <em>Los mejores títulos y estrenos</em>
            </h1>
            <h1 className='mb-6 text-2xl text-center font-extralight'>
            ¡Añadimos nuevos títulos TODOS los días – Más de 3,500 películas y contando!
            </h1>
            <h1 className='mb-12 text-2xl text-center'>
             <em className='font-extralight'>El contenido puede variar a la fecha de la visualización de esta lista, el contenido de canales puede cambiar sin previo aviso.</em>
            </h1>
            <div className='mt-16 2xl:px-24'>
              <Card className='shadow-2xl rounded-none border-2 p-6'>
                  <Tabs defaultValue="63" className="w-[100%]">
                    <TabsList className="mx-8 mt-6 grid gap-2 md:grid-cols-2 xl:grid-cols-4 h-[100%] p-3 shadow-lg">
                      {
                        categories.map((categoria, index) => (
                          <TabsTrigger 
                            value={categoria.id}
                            key={index}
                          >
                              {categoria.category_name}
                          </TabsTrigger>
                        ))
                      }
                    
                    </TabsList>
                      {
                        categories.map((categoria, index) => (
                          <TabsContent 
                            value={categoria.id}
                            key={index}
                          >
                            <DataTableExample categoria={categoria.id}/>
                          </TabsContent>
                        ))
                      }
                  </Tabs>
              </Card>
            </div>
          </div>  
        </div>
        <Footer/>
      </div>
    </div>
  )
}
