import { IconBrandTelegram, IconBrandWhatsapp } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

import IconScreenshot from "./../assets/screenshot2-v3.webp";


export function SectionAboutUs() {
    return (
      <div className="py-12">
        <div className="mt-16 grid gap-0 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:mx-0">
          <Card className="w-100 xl:w-[110%] xl:p-20 flex flex-col shadow-2xl">
            <CardHeader>
              <CardTitle className="text-left text-xl text-muted-foreground">
                Acerca de
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-3 h-full">
              <CardDescription>
                <div className="text-left text-lg text-muted-foreground">
                  <h1 className="text-5xl text-left">
                    <em className="font-extralight">Disfruta del </em>
                    <br />
                    <em className="font-extralight">mejor </em>
                    <em style={{ fontFamily: "Playfair Display" }}>
                      contenido{" "}
                    </em>
                    <em className="font-extralight">y </em>
                    <br />
                    <em style={{ fontFamily: "Playfair Display" }}>soporte</em>
                    <em className="font-extralight"> flexible.</em>
                  </h1>
                </div>
                <div
                  className="mt-4 text-left text-lg text-muted-foreground font-light"
                  style={{ fontFamily: "Poppins" }}
                >
                  Intentamos siempre estar mejorando nuestro servicio por lo
                  cual ofrecemos soporte mediante Telegram, WhatsApp y FB
                  Messenger lo que lo hace en un soporte instantáneo.
                </div>
                <div className="mt-6 flex items-center justify-center">
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <a href="https://wa.me/+5218125949904" target="_blank">
                      <Button className="rounded-none bg-green-500">
                        <IconBrandWhatsapp /> &nbsp;
                        <div>WhatsApp</div>
                      </Button>
                    </a>
                    <a href="https://t.me/SpaceTVPlus" target="_blank">
                      <Button className="rounded-none bg-sky-600">
                        <IconBrandTelegram /> &nbsp;
                        <div>Telegram</div>
                      </Button>
                    </a>
                  </div>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center">
            <Card className="relative w-full h-auto py-4 shadow-2xl bg-black border-2 border-black dark:border-white">
              <img src={IconScreenshot} alt="Screenshot" className="w-full" />
            </Card>
          </div>
        </div>
      </div>
    );
}