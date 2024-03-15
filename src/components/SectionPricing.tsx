import { IconBrandPaypal, IconBuildingStore, IconCreditCard, IconCurrencyDollar } from "@tabler/icons-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { IconBrandCashapp } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { SeparatorWithIcon } from "./SeparationItems";
import { IconBrandWhatsapp } from "@tabler/icons-react";


export function SectionPricing() {
    return (
      <>
        <div className="py-12" id="paquetes">
          <h1 className="mb-6 text-5xl text-center font-extralight">
            <em>Contamos con varios paquetes de tiempo</em>
          </h1>
          <h1 className="mb-6 text-2xl text-center font-extralight">
            Depende de sus necesidades y los dispositivos que quiera activar en
            el momento, escoja el paquete que mas le convenga.
          </h1>
          <h1 className="mb-12 text-2xl text-center">
            <em className="font-extralight">
              ¡Entre más tiempo adquiera más{" "}
              <em className="font-bold">económico</em> es el costo!
            </em>
          </h1>
          <h1 className="mb-4 text-5xl text-center font-extralight">
            Tarjeta de Crédito, Débito y/o PayPal
          </h1>
          <div className="mt-16 grid gap-7 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:px-24">
            <Card className="flex flex-col shadow-2xl rounded-2xl border-2">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center text-xl text-muted-foreground">
                  <div className="flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24">
                    <IconCurrencyDollar
                      size={64}
                      className="text-blueprimary"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-3 h-full">
                <CardDescription>
                  <div className="text-center text-lg text-muted-foreground">
                    <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      1 MES
                    </div>
                  </div>
                  <div className="grid gap-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl">
                          <em style={{ fontFamily: "Bungee" }}>$170.00</em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl">
                          <em style={{ fontFamily: "Bungee" }}>$11.00</em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-lg font-semibold">
                          <em>
                            MercadoPago
                            <br />
                            (MXN)
                          </em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center ">
                        <h1 className="text-lg font-semibold">
                          <em>
                            PayPal
                            <br />
                            (USD)
                          </em>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-sm font-bold text-muted-foreground">
                    + Comisión por uso de método de pago.
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <a
                        target="_blank"
                        href="https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=159296684-6726849e-3c84-4556-96a2-2c10eae76a9a"
                      >
                        <Button className="bg-green-500">
                          <IconCreditCard /> &nbsp;
                          <div>Comprar</div>
                        </Button>
                      </a>
                      <a
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F2NJZNSLPM2JL"
                        target="_blank"
                      >
                        <Button className="bg-blueprimary">
                          <IconBrandPaypal /> &nbsp;
                          <div>Comprar</div>
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col shadow-2xl rounded-2xl border-2">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center text-xl text-muted-foreground">
                  <div className="flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24">
                    <IconCurrencyDollar
                      size={64}
                      className="text-blueprimary"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-3 h-full">
                <CardDescription>
                  <div className="text-center text-lg text-muted-foreground">
                    <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      1 SEMESTRE
                    </div>
                  </div>
                  <div className="grid gap-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl">
                          <em style={{ fontFamily: "Bungee" }}>$850.00</em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl">
                          <em style={{ fontFamily: "Bungee" }}>$55.00</em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-lg font-semibold">
                          <em>
                            MercadoPago
                            <br />
                            (MXN)
                          </em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center ">
                        <h1 className="text-lg font-semibold">
                          <em>
                            PayPal
                            <br />
                            (USD)
                          </em>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-sm font-bold text-muted-foreground">
                    + Comisión por uso de método de pago.
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <a
                        target="_blank"
                        href="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=159296684-912ba9b4-0618-4ee2-963b-e102520df4d4"
                      >
                        <Button className="bg-green-500">
                          <IconCreditCard /> &nbsp;
                          <div>Comprar</div>
                        </Button>
                      </a>
                      <a
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W28WB83MX8CYA"
                        target="_blank"
                      >
                        <Button className="bg-blueprimary">
                          <IconBrandPaypal /> &nbsp;
                          <div>Comprar</div>
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col shadow-2xl rounded-2xl border-2">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center text-xl text-muted-foreground">
                  <div className="flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24">
                    <IconCurrencyDollar
                      size={64}
                      className="text-blueprimary"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-3 h-full">
                <CardDescription>
                  <div className="text-center text-lg text-muted-foreground">
                    <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      1 ANUALIDAD
                    </div>
                  </div>
                  <div className="grid gap-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl">
                          <em style={{ fontFamily: "Bungee" }}>$1600.00</em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl">
                          <em style={{ fontFamily: "Bungee" }}>$100.00</em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-lg font-semibold">
                          <em>
                            MercadoPago
                            <br />
                            (MXN)
                          </em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center ">
                        <h1 className="text-lg font-semibold">
                          <em>
                            PayPal
                            <br />
                            (USD)
                          </em>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-sm font-bold text-muted-foreground">
                    + Comisión por uso de método de pago.
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <a
                        target="_blank"
                        href="https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=159296684-01e5f6be-5ea6-4834-812c-4cb7f8c9ee16"
                      >
                        <Button className="bg-green-500">
                          <IconCreditCard /> &nbsp;
                          <div>Comprar</div>
                        </Button>
                      </a>
                      <a
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VGZU46RDPGDDS"
                        target="_blank"
                      >
                        <Button className="bg-blueprimary">
                          <IconBrandPaypal /> &nbsp;
                          <div>Comprar</div>
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col shadow-2xl rounded-2xl border-2">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center text-xl text-muted-foreground">
                  <div className="flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24">
                    <IconCurrencyDollar
                      size={64}
                      className="text-blueprimary"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-3 h-full">
                <CardDescription>
                  <div className="text-center text-lg text-muted-foreground">
                    <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      2 MESES
                    </div>
                  </div>
                  <div className="grid gap-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl">
                          <em style={{ fontFamily: "Bungee" }}>$340.00</em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl">
                          <em style={{ fontFamily: "Bungee" }}>$22.00</em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-lg font-semibold">
                          <em>
                            MercadoPago
                            <br />
                            (MXN)
                          </em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center ">
                        <h1 className="text-lg font-semibold">
                          <em>
                            PayPal
                            <br />
                            (USD)
                          </em>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-sm font-bold text-muted-foreground">
                    + Comisión por uso de método de pago.
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <a target="_blank" href="https://mpago.la/2QfqUeW">
                        <Button className="bg-green-500">
                          <IconCreditCard /> &nbsp;
                          <div>Comprar</div>
                        </Button>
                      </a>
                      <a
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PD7MGAZUWBE8Q"
                        target="_blank"
                      >
                        <Button className="bg-blueprimary">
                          <IconBrandPaypal /> &nbsp;
                          <div>Comprar</div>
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col shadow-2xl rounded-2xl border-2">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center text-xl text-muted-foreground">
                  <div className="flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24">
                    <IconCurrencyDollar
                      size={64}
                      className="text-blueprimary"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-3 h-full">
                <CardDescription>
                  <div className="text-center text-lg text-muted-foreground">
                    <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      2 SEMESTRES
                    </div>
                  </div>
                  <div className="grid gap-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl">
                          <em style={{ fontFamily: "Bungee" }}>$1700.00</em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl">
                          <em style={{ fontFamily: "Bungee" }}>$110.00</em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-lg font-semibold">
                          <em>
                            MercadoPago
                            <br />
                            (MXN)
                          </em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center ">
                        <h1 className="text-lg font-semibold">
                          <em>
                            PayPal
                            <br />
                            (USD)
                          </em>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-sm font-bold text-muted-foreground">
                    + Comisión por uso de método de pago.
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <a target="_blank" href="https://mpago.la/2Xig99A">
                        <Button className="bg-green-500">
                          <IconCreditCard /> &nbsp;
                          <div>Comprar</div>
                        </Button>
                      </a>
                      <a
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=STE8ZZ6FL4XMU"
                        target="_blank"
                      >
                        <Button className="bg-blueprimary">
                          <IconBrandPaypal /> &nbsp;
                          <div>Comprar</div>
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col shadow-2xl rounded-2xl border-2">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center text-xl text-muted-foreground">
                  <div className="flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24">
                    <IconCurrencyDollar
                      size={64}
                      className="text-blueprimary"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-3 h-full">
                <CardDescription>
                  <div className="text-center text-lg text-muted-foreground">
                    <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      2 ANUALIDADES
                    </div>
                  </div>
                  <div className="grid gap-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl">
                          <em style={{ fontFamily: "Bungee" }}>$3200.00</em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl">
                          <em style={{ fontFamily: "Bungee" }}>$195.00</em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-lg font-semibold">
                          <em>
                            MercadoPago
                            <br />
                            (MXN)
                          </em>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center ">
                        <h1 className="text-lg font-semibold">
                          <em>
                            PayPal
                            <br />
                            (USD)
                          </em>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-sm font-bold text-muted-foreground">
                    + Comisión por uso de método de pago.
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <a target="_blank" href="https://mpago.la/1Pm9Efj">
                        <Button className="bg-green-500">
                          <IconCreditCard /> &nbsp;
                          <div>Comprar</div>
                        </Button>
                      </a>
                      <a
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PAWA9M66EW2ZE"
                        target="_blank"
                      >
                        <Button className="bg-blueprimary">
                          <IconBrandPaypal /> &nbsp;
                          <div>Comprar</div>
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
        <SeparatorWithIcon
          icon={IconBrandCashapp}
          iconSize={48}
          color="blueprimary"
        />
        <div className="py-12">
          <h1 className="mb-4 text-5xl text-center font-extralight">
            Deposito OXXO / 7-Eleven / Transferencia (MXN)
          </h1>
          <div className="mt-16 grid gap-7 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:px-24">
            <Card className="flex flex-col shadow-2xl rounded-2xl border-2">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center text-xl text-muted-foreground">
                  <div className="flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24">
                    <IconBuildingStore size={64} className="text-blueprimary" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-3 h-full">
                <CardDescription>
                  <div className="text-center text-lg text-muted-foreground">
                    <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      OXXO
                    </div>
                  </div>
                  <div className="text-center">
                    <h1 className="text-2xl">
                      <em style={{ fontFamily: "Bungee" }}>
                        4152 3140 0408 8871
                      </em>
                    </h1>
                  </div>
                  <div className="text-center">
                    <h1 className="text-lg font-semibold">
                      <em>BBVA Bancomer</em>
                    </h1>
                  </div>
                  <div className="mt-4 text-center">
                    <h1 className="text-lg font-normal">
                      <b>Monto</b>: <em>Dependiendo del plazo elegido</em>
                    </h1>
                  </div>
                  <div className="mt-2 text-center">
                    <h1 className="text-lg font-normal">
                      <b>Nombre</b>: <em>Jorge Hernandez</em>
                    </h1>
                  </div>
                  <div className="mt-4 text-center text-sm font-semibold text-muted-foreground">
                    <em>
                      Puede realizar su pago en <b>OXXO</b> solamente brindando
                      el número de tarjeta y monto a depositar, también puede
                      realizar <b>transferencia</b> desde su banca móvil.
                    </em>
                  </div>
                  <div className="mt-4 text-center text-sm font-bold text-muted-foreground">
                    <em>
                      Una vez realizado su pago envíenos su comprobante por
                      WhatsApp.
                    </em>
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <a
                        target="_blank"
                        href="https://wa.me/+5218125949904/?text=Realice mi pago"
                      >
                        <Button className="bg-green-500">
                          <IconBrandWhatsapp /> &nbsp; Ya pagué
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col shadow-2xl rounded-2xl border-2">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center text-xl text-muted-foreground">
                  <div className="flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24">
                    <IconBuildingStore size={64} className="text-blueprimary" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-3 h-full">
                <CardDescription>
                  <div className="text-center text-lg text-muted-foreground">
                    <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      7-Eleven
                    </div>
                  </div>
                  <div className="text-center">
                    <h1 className="text-2xl">
                      <em style={{ fontFamily: "Bungee" }}>
                        4189 1431 1341 8316
                      </em>
                    </h1>
                  </div>
                  <div className="text-center">
                    <h1 className="text-lg font-semibold">
                      <em>Banorte</em>
                    </h1>
                  </div>
                  <div className="mt-4 text-center">
                    <h1 className="text-lg font-normal">
                      <b>Monto</b>: <em>Dependiendo del plazo elegido</em>
                    </h1>
                  </div>
                  <div className="mt-2 text-center">
                    <h1 className="text-lg font-normal">
                      <b>Nombre</b>: <em>Jorge Hernandez</em>
                    </h1>
                  </div>
                  <div className="mt-4 text-center text-sm font-semibold text-muted-foreground">
                    <em>
                      Puede realizar su pago en <b>7-Eleven</b>,{" "}
                      <b>Farmacias Guadalajara</b>, <b>Farmacias del Ahorro</b>{" "}
                      y/o <b>Soriana</b> solamente brindando el número de
                      tarjeta y monto a depositar, también puede realizar{" "}
                      <b>transferencia</b> desde su banca móvil.
                    </em>
                  </div>
                  <div className="mt-4 text-center text-sm font-bold text-muted-foreground">
                    <em>
                      Una vez realizado su pago envíenos su comprobante por
                      WhatsApp.
                    </em>
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <a
                        target="_blank"
                        href="https://wa.me/+5218125949904/?text=Realice mi pago"
                      >
                        <Button className="bg-green-500">
                          <IconBrandWhatsapp /> &nbsp; Ya pagué
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
}