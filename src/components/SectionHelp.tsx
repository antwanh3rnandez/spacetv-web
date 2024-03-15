import { IconBrandFacebook, IconBrandWhatsapp } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";


export function SectionHelp() {
  return (
    <div className="py-12">
      <h1
        className="text-6xl text-center"
        style={{ fontFamily: "Playfair Display" }}
      >
        <em style={{ fontStyle: "italic", color: "rgb(244, 13, 3)" }}>
          SpaceTV+{" "}
        </em>
        <em>solicita de su </em>
        <em style={{ fontStyle: "italic", color: "rgb(244, 13, 3)" }}>
          ayuda.
        </em>
      </h1>
      <div className="mt-16 grid gap-0 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:mx-24 shadow-xl">
        <Card className="flex flex-col items-center text-center">
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-3 h-full">
            <CardDescription className="text-center text-lg text-muted-foreground">
              <em>
                "Estimados amigos y suscriptores de SpaceTV+ nuestra página de
                Facebook fue eliminada, afortunadamente teníamos un respaldo,
                por lo cual hoy estamos aquí para pedir de su apoyo dándole «{" "}
                <b>like y seguir</b> » a nuestra nueva página y de esta manera
                puedan mantenerse conectados y actualizados siempre con nuestras
                novedades.
                <br />
                <br />
                También informarles que se esta realizando una actualización de
                datos de contacto para evitar situaciones de este tipo para
                siempre poder estar conectados y en contacto con ustedes,
                básicamente se les solicitará un numero por el cual podamos
                contactarlos por Whatsapp. Pueden apoyarnos con ese proceso
                realizando lo siguiente, solamente deberán dar dar clic al
                siguiente enlace el cual los enviara a nuestro chat directo de
                WhatsApp y lo único que deberán hacer es enviar un mensaje con
                su <b>nombre de usuario</b> que usan para acceder a nuestro
                servicio, de esa manera nosotros ligaremos su nombre de usuario
                con su WhatsApp para un contacto futuro."
              </em>
              <div className="mt-5 flex items-center justify-center">
                <div className="flex flex-row items-center space-x-4 lg:space-x-6">
                  <a href="https://www.facebook.com/WanherTV/" target="_blank">
                    <Button className="rounded-none bg-red-600">
                      <IconBrandFacebook /> &nbsp;
                      <div>Nueva Pagina de Facebook</div>
                    </Button>
                  </a>
                  <a href="https://wa.me/+5218125949904" target="_blank">
                    <Button className="rounded-none bg-red-600">
                      <IconBrandWhatsapp /> &nbsp;
                      <div>WhatsApp</div>
                    </Button>
                  </a>
                </div>
              </div>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}