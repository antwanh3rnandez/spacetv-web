import { Card } from "../../../components/ui/card";
import { Footer } from "../../../components/pages/Footer";
import { HeroPages } from "../../../components/pages/HeroPages";
import {
  IconAlertTriangleFilled,
  IconCheck,
  IconDownload,
  IconRefresh,
  IconSettings,
} from "@tabler/icons-react";

export const RokuPage = () => {
  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Instalar SpaceTV+ (Roku)" />
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className="my-12">
            <div className="my-24 2xl:px-32">
              <h1 className="mb-6 text-3xl xl:text-5xl text-center font-extralight">
                <em>SpaceTV+ | Principal</em>
              </h1>
              <h1 className="mb-12 text-xl text-center">
                <em className="font-extralight">
                  Esta aplicación le permitirá acceder al contenido de
                  Películas, Canales y Series
                </em>
              </h1>
              <Card className="shadow-xl p-8" style={{ fontFamily: "Poppins" }}>
                <div className="grid lg:grid-cols-3 items-start justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                      <IconDownload size={48} className="text-blueprimary" />
                    </div>
                    <div className="py-4 lg:mt-0 text-center lg:text-center">
                      <h4 className="font-semibold">PASO 1</h4>
                      <p className="font-light p-4">
                        Instalar el canal de Roku con el código{" "}
                        <a
                          href="https://my.roku.com/add/spacetvplus297"
                          target="_blank"
                          className="text-blueprimary"
                        >
                          spacetvplus297
                        </a>{" "}
                        o{" "}
                        <a
                          href="https://my.roku.com/add/spacetvplus310"
                          target="_blank"
                          className="text-blueprimary"
                        >
                          spacetvplus310
                        </a>
                        . Puedes presionar en el código y te manda directamente
                        al url.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                      <IconRefresh size={48} className="text-blueprimary" />
                    </div>
                    <div className="py-4 lg:mt-0 text-center lg:text-center">
                      <h4 className="font-semibold">PASO 2</h4>
                      <p className="font-light p-4">
                        Una vez instalado vamos desde el Roku a Configuración{" "}
                        {">"} Sistema {">"} Actualización de Sistema {">"}{" "}
                        «Verificar ahora» para que le aparezca el canal.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                      <IconAlertTriangleFilled
                        size={48}
                        className="text-blueprimary"
                      />
                    </div>
                    <div className="py-4 lg:mt-0 text-center lg:text-center">
                      <h4 className="font-semibold">PASO 3</h4>
                      <p className="font-light p-4">
                        Obtendremos su URL de cuenta personalizado desde su
                        panel de usuario en la sección de «Links de Servicio» en
                        la sección "Dashboard".
                      </p>
                      <p className="p-2 font-light">
                        <a
                          href="http://cuenta.spacetv.com.mx"
                          target="_blank"
                          className="text-blueprimary"
                        >
                          http://cuenta.spacetv.com.mx
                        </a>
                      </p>
                      <p className="p-4">
                        <em>
                          * <span className="text-red-600">NOTA</span>: Si le
                          aparece un error al ingresar al panel, valide que en
                          el url se encuentre http:// y no https://
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 items-start justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                      <IconSettings size={48} className="text-blueprimary" />
                    </div>
                    <div className="py-4 lg:mt-0 text-center lg:text-center">
                      <h4 className="font-semibold">PASO 4</h4>
                      <p className="font-light p-4">
                        Nos dirigimos a nuestro Roku, ingresamos en la app
                        SpaceTV+ y dentro del canal presionamos «Configuración»
                        mediante la tecla "*" de su control y presionamos en
                        «Cambiar URL de cuenta» e ingresamos el que obtuvimos en
                        su panel de cuenta del paso anterior.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                      <IconCheck size={48} className="text-blueprimary" />
                    </div>
                    <div className="py-4 lg:mt-0 text-center lg:text-center">
                      <h4 className="font-semibold">PASO 5</h4>
                      <p className="font-light p-4">
                        Una vez ingresado el URL, le da «terminado» o «guardar».
                        Sale de la aplicación al menú principal de Roku y vuelve
                        a acceder al canal de SpaceTV+, esto para que los
                        cambios se guarden.
                      </p>
                      <p className="p-4">
                        <em className="text-blueprimary">
                          ¡Listo! Ahora puede acceder al contenido.
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
