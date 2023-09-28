import { useEffect, useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import hero from "../../assets/hero.png"
import screenshot from "../../assets/Home_ScreenShot.jpg"
import { 
  IconRefresh, 
  IconDeviceTv, 
  IconMovie, 
  IconUsersGroup, 
  IconBrandFacebook, 
  IconBrandWhatsapp, 
  IconBrandTelegram, 
  IconCurrencyDollar, 
  IconCreditCard, 
  IconBrandPaypal, 
  IconBrandCashapp, 
  IconBuildingStore, 
} from '@tabler/icons-react/';

import TestimonialCarousel from '../../components/pages/inicio/TestimonialCarousel';
import { Footer } from '../../components/pages/Footer';

const testimonials = [
  {
    text: 'Yo ya tengo más de 1 año con ustedes y muy agusto y recomendable servicio.',
    author: 'Miguel Marenc',
    age: 'Suscriptor desde hace 3 años.',
    pic: '/user.png',
  },
  {
    text: 'Han mejorado sustancialmente en este tiempo que he estado con ustedes, excelente canal!',
    author: 'Jossuet Amir Barrios González',
    age: 'Suscriptor desde hace 3 años.',
    pic: '/user.png',
  },
  {
    text: 'Esta muy bien tu programación recomenda 10000%',
    author: 'Jfkdj Montevideo',
    age: 'Suscriptor desde hace 2 años.',
    pic: '/user.png',
  },
  {
    text: 'Exelente servicio.. Y hasta la fecha no eh tenido fallas de ningún tipo.. Gracias por el servicio y fiabilidad',
    author: 'Liliana Sarai',
    age: 'Suscriptor desde hace 1 año.',
    pic: '/user.png',
  },
  {
    text: 'Excelente!!',
    author: 'Michel Akoury Malacon',
    age: 'Suscriptor desde hace 3 años.',
    pic: '/user.png',
  },
];

export const InicioPage = () => {

  const palabras = ["FireTV", "SmartTV", "Windows", "Roku", "AndroidTV", "Mac", "iPhone", "iPad"];
  const [palabraActual, setPalabraActual] = useState("Dispositivo");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % palabras.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setPalabraActual(palabras[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[590px]">
        <img className="w-full h-full object-cover" src={hero} alt="Hero" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="w-full h-full bg-black bg-opacity-50 text-white text-center p-4 rounded"
            style={{ backdropFilter: 'blur(0px)' }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
                <h2 className="hero-text">
                  El mejor contenido para su {palabraActual}
                </h2>
              <div className="mt-[-12px]">
                <h2 className="hero-text">
                ¡Adquiera su servicio ahora!
                </h2>
              </div>
              <div className="mt-[-2px]">
                <a href='#paquetes'>
                  <Button className='blue-primary text-white rounded-full px-8 py-6'>COMPRAR AHORA</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-32 lg:px-64 mt-[-48px]">
          <div className="grid gap-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 shadow-xl">
            <Card className='opacity-100 rounded-none'>
              <CardHeader className="items-center">
                <CardTitle>
                  <IconRefresh size={64}/>
                </CardTitle>        
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-3">
                <div className="text-xl font-semibold text-muted-foreground">
                  ACTUALIZACIONES
                </div>
                <p className="text-lg text-muted-foreground text-center">
                  Contenido nuevo todos los días hábiles y a veces fines de semana.
                </p>
              </CardContent>
            </Card>
            <Card className='opacity-100 rounded-none'>
              <CardHeader className="items-center">
                <CardTitle>
                  <IconDeviceTv size={64}/>
                </CardTitle>        
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-3">
                <div className="text-xl font-semibold text-muted-foreground">
                  CANALES EN VIVO
                </div>
                <p className="text-lg text-muted-foreground text-center">
                  Más de 600 canales en vivo de diversas categorías y países con PPE incluido.
                </p>
              </CardContent>
            </Card>
            <Card className='opacity-100 rounded-none'>
              <CardHeader className="items-center">
                <CardTitle>
                  <IconMovie size={64}/>
                </CardTitle>        
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-3">
                <div className="text-xl font-semibold text-muted-foreground">
                  PELÍCULAS
                </div>
                <p className="text-lg text-muted-foreground text-center">
                  Más de 4,700 películas de estreno y títulos clásicos del cine para todas las edades.
                </p>
              </CardContent>
            </Card>
            <Card className='opacity-100 rounded-none'>
              <CardHeader className="items-center">
                <CardTitle>
                  <IconUsersGroup size={64}/>
                </CardTitle>        
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-3">
                <div className="text-xl font-semibold text-muted-foreground">
                  SERIES DE TV
                </div>
                <p className="text-lg text-muted-foreground text-center">
                  Series actualizadas constantemente trayendo los mejores y más nuevos títulos.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='py-12'>
            <h1 className='text-6xl text-center' style={{fontFamily: 'Playfair Display'}}>
              <em style={{fontStyle: 'italic', color: 'rgb(244, 13, 3)'}}>SpaceTV+ </em>
              <em>solicita de su </em>
              <em style={{fontStyle: 'italic', color: 'rgb(244, 13, 3)'}}>ayuda.</em>
            </h1>
            <div className='mt-16 grid gap-0 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:mx-32 shadow-xl'>
              <Card className='flex flex-col items-center text-center'>
                <CardHeader>
                  <CardTitle>
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                  <CardDescription className='text-center text-lg text-muted-foreground' >
                    <em>"Estimados amigos y suscriptores de SpaceTV+ nuestra página de Facebook fue eliminada, afortunadamente teníamos un respaldo, por lo cual hoy estamos aquí para pedir de su apoyo dándole « <b>like y seguir</b> » a nuestra nueva página y de esta manera puedan mantenerse conectados y actualizados siempre con nuestras novedades.
                    <br/>
                    <br/>
                    También informarles que se esta realizando una actualización de datos de contacto para evitar situaciones de este tipo para siempre poder estar conectados y en contacto con ustedes, básicamente se les solicitará un numero por el cual podamos contactarlos por Whatsapp. Pueden apoyarnos con ese proceso realizando lo siguiente, solamente deberán dar dar clic al siguiente enlace el cual los enviara a nuestro chat directo de WhatsApp y lo único que deberán hacer es enviar un mensaje con su <b>nombre de usuario</b> que usan para acceder a nuestro servicio, de esa manera nosotros ligaremos su nombre de usuario con su WhatsApp para un contacto futuro."</em>
                    <div className='mt-5 flex items-center justify-center'>
                      <div className='flex flex-row items-center space-x-4 lg:space-x-6'>
                          <a href='https://www.facebook.com/WanherTV/' target='_blank'>
                            <Button className='rounded-none bg-red-600'>
                              <IconBrandFacebook /> &nbsp; Nueva Pagina de Facebook
                            </Button>
                          </a>
                      </div>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className='py-12'>
            <div className='mt-16 grid gap-0 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:mx-24'>
              <Card className='w-100 xl:w-[110%] xl:p-24 flex flex-col shadow-2xl'>
                <CardHeader>
                  <CardTitle className='text-left text-xl text-muted-foreground'>
                  Acerca de
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                  <CardDescription>
                    <div className='text-left text-lg text-muted-foreground'>
                      <h1 className='text-5xl text-left'>
                      <em className='font-extralight'>Disfruta del </em>
                      <br/>
                      <em className='font-extralight'>mejor </em><em style={{fontFamily: 'Playfair Display'}}>contenido </em><em className='font-extralight'>y </em>
                      <br/>
                      <em style={{fontFamily: 'Playfair Display'}}>soporte</em><em className='font-extralight'> flexible.</em>
                    </h1>
                    </div>
                    <div className='mt-4 text-left text-lg text-muted-foreground'>
                      Intentamos siempre estar mejorando nuestro servicio por lo cual ofrecemos soporte mediante Telegram, WhatsApp y FB Messenger lo que lo hace en un soporte instantáneo.
                    </div>
                    <div className='mt-6 flex items-center justify-center'>
                      <div className='flex items-center space-x-4 lg:space-x-6'>
                        <a href='https://wa.me/+5218125949904' target='_blank'>
                        <Button className='rounded-none bg-green-500'>
                            <IconBrandWhatsapp /> &nbsp; WhatsApp
                          </Button>
                        </a>
                        <a href='https://t.me/SpaceTVPlus' target='_blank'>
                          <Button className='rounded-none bg-sky-600'>
                            <IconBrandTelegram /> &nbsp; Telegram
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
              <div className='flex flex-col justify-center'>
                <Card className='relative w-full h-auto py-4 shadow-2xl bg-black border-2 border-black dark:border-white'>
                  <img src={screenshot} alt="Screenshot" className='w-full' />
                </Card>
              </div>
            </div>
          </div>
          <div className='py-12' id='paquetes'>
            <h1 className='mb-6 text-5xl text-center font-extralight'>
              <em>Contamos con varios paquetes de tiempo</em>
            </h1>
            <h1 className='mb-6 text-2xl text-center font-extralight'>
              Depende de sus necesidades y los dispositivos que quiera activar en el momento, escoja el paquete que mas le convenga.
            </h1>
            <h1 className='mb-12 text-2xl text-center'>
             <em className='font-extralight'>¡Entre más tiempo adquiera más <em className='font-bold'>económico</em> es el costo!</em>
            </h1>
            <h1 className='mb-4 text-5xl text-center font-extralight'>
              Tarjeta de Crédito, Débito y/o PayPal
            </h1>
            <div className='mt-16 grid gap-7 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:px-24'>
              <Card className='flex flex-col shadow-2xl rounded-2xl border-2'>
                <CardHeader>
                  <CardTitle className='flex flex-col items-center text-center text-xl text-muted-foreground'>
                   <div className='flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24'>
                    <IconCurrencyDollar size={64} className='text-blueprimary' />
                   </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                  <CardDescription>
                    <div className='text-center text-lg text-muted-foreground'>
                      <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      1 MES
                      </div>
                    </div>
                    <div className='grid gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-2xl'>
                            <em style={{fontFamily: 'Bungee'}}>$170.00</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-2xl'>
                            <em style={{fontFamily: 'Bungee'}}>$11.00</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-lg font-semibold'>
                            <em>MercadoPago<br/>(MXN)</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center '>
                          <h1 className='text-lg font-semibold'>
                            <em>PayPal<br/>(USD)</em>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 text-center text-sm font-bold text-muted-foreground'>
                      + Comisión por uso de método de pago.
                    </div>
                    <div className='mt-6 flex items-center justify-center'>
                      <div className='flex items-center space-x-4 lg:space-x-6'>
                        <a target='_blank' href='https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=159296684-6726849e-3c84-4556-96a2-2c10eae76a9a'>
                          <Button className='bg-green-500'>
                            <IconCreditCard /> &nbsp; Comprar
                          </Button>
                        </a>
                        <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F2NJZNSLPM2JL' target='_blank'>
                          <Button className='bg-blueprimary'>
                            <IconBrandPaypal /> &nbsp; Comprar
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className='flex flex-col shadow-2xl rounded-2xl border-2'>
                <CardHeader>
                  <CardTitle className='flex flex-col items-center text-center text-xl text-muted-foreground'>
                   <div className='flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24'>
                    <IconCurrencyDollar size={64} className='text-blueprimary' />
                   </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                  <CardDescription>
                    <div className='text-center text-lg text-muted-foreground'>
                      <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      1 SEMESTRE
                      </div>
                    </div>
                    <div className='grid gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-2xl'>
                            <em style={{fontFamily: 'Bungee'}}>$850.00</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-2xl'>
                            <em style={{fontFamily: 'Bungee'}}>$55.00</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-lg font-semibold'>
                            <em>MercadoPago<br/>(MXN)</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center '>
                          <h1 className='text-lg font-semibold'>
                            <em>PayPal<br/>(USD)</em>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 text-center text-sm font-bold text-muted-foreground'>
                      + Comisión por uso de método de pago.
                    </div>
                    <div className='mt-6 flex items-center justify-center'>
                      <div className='flex items-center space-x-4 lg:space-x-6'>
                        <a target='_blank' href='https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=159296684-912ba9b4-0618-4ee2-963b-e102520df4d4'>
                          <Button className='bg-green-500'>
                            <IconCreditCard /> &nbsp; Comprar
                          </Button>
                        </a>
                        <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W28WB83MX8CYA' target='_blank'>
                          <Button className='bg-blueprimary'>
                            <IconBrandPaypal /> &nbsp; Comprar
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className='flex flex-col shadow-2xl rounded-2xl border-2'>
                <CardHeader>
                  <CardTitle className='flex flex-col items-center text-center text-xl text-muted-foreground'>
                   <div className='flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24'>
                    <IconCurrencyDollar size={64} className='text-blueprimary' />
                   </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                  <CardDescription>
                    <div className='text-center text-lg text-muted-foreground'>
                      <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      1 ANUALIDAD
                      </div>
                    </div>
                    <div className='grid gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-2xl'>
                            <em style={{fontFamily: 'Bungee'}}>$1600.00</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-2xl'>
                            <em style={{fontFamily: 'Bungee'}}>$100.00</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-lg font-semibold'>
                            <em>MercadoPago<br/>(MXN)</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center '>
                          <h1 className='text-lg font-semibold'>
                            <em>PayPal<br/>(USD)</em>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 text-center text-sm font-bold text-muted-foreground'>
                      + Comisión por uso de método de pago.
                    </div>
                    <div className='mt-6 flex items-center justify-center'>
                      <div className='flex items-center space-x-4 lg:space-x-6'>
                        <a target='_blank' href='https://www.mercadopago.com.mx/checkout/v1/redirect?preference-id=159296684-01e5f6be-5ea6-4834-812c-4cb7f8c9ee16'>
                          <Button className='bg-green-500'>
                            <IconCreditCard /> &nbsp; Comprar
                          </Button>
                        </a>
                        <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VGZU46RDPGDDS' target='_blank'>
                          <Button className='bg-blueprimary'>
                            <IconBrandPaypal /> &nbsp; Comprar
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className='flex flex-col shadow-2xl rounded-2xl border-2'>
                <CardHeader>
                  <CardTitle className='flex flex-col items-center text-center text-xl text-muted-foreground'>
                   <div className='flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24'>
                    <IconCurrencyDollar size={64} className='text-blueprimary' />
                   </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                  <CardDescription>
                    <div className='text-center text-lg text-muted-foreground'>
                      <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      2 MESES
                      </div>
                    </div>
                    <div className='grid gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-2xl'>
                            <em style={{fontFamily: 'Bungee'}}>$340.00</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-2xl'>
                            <em style={{fontFamily: 'Bungee'}}>$22.00</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-lg font-semibold'>
                            <em>MercadoPago<br/>(MXN)</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center '>
                          <h1 className='text-lg font-semibold'>
                            <em>PayPal<br/>(USD)</em>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 text-center text-sm font-bold text-muted-foreground'>
                      + Comisión por uso de método de pago.
                    </div>
                    <div className='mt-6 flex items-center justify-center'>
                      <div className='flex items-center space-x-4 lg:space-x-6'>
                        <a target='_blank' href='https://mpago.la/2QfqUeW'>
                          <Button className='bg-green-500'>
                            <IconCreditCard /> &nbsp; Comprar
                          </Button>
                        </a>
                        <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PD7MGAZUWBE8Q' target='_blank'>
                          <Button className='bg-blueprimary'>
                            <IconBrandPaypal /> &nbsp; Comprar
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className='flex flex-col shadow-2xl rounded-2xl border-2'>
                <CardHeader>
                  <CardTitle className='flex flex-col items-center text-center text-xl text-muted-foreground'>
                   <div className='flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24'>
                    <IconCurrencyDollar size={64} className='text-blueprimary' />
                   </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                  <CardDescription>
                    <div className='text-center text-lg text-muted-foreground'>
                      <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      2 SEMESTRES
                      </div>
                    </div>
                    <div className='grid gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-2xl'>
                            <em style={{fontFamily: 'Bungee'}}>$1700.00</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-2xl'>
                            <em style={{fontFamily: 'Bungee'}}>$110.00</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-lg font-semibold'>
                            <em>MercadoPago<br/>(MXN)</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center '>
                          <h1 className='text-lg font-semibold'>
                            <em>PayPal<br/>(USD)</em>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 text-center text-sm font-bold text-muted-foreground'>
                      + Comisión por uso de método de pago.
                    </div>
                    <div className='mt-6 flex items-center justify-center'>
                      <div className='flex items-center space-x-4 lg:space-x-6'>
                        <a target='_blank' href='https://mpago.la/2Xig99A'>
                          <Button className='bg-green-500'>
                            <IconCreditCard /> &nbsp; Comprar
                          </Button>
                        </a>
                        <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=STE8ZZ6FL4XMU' target='_blank'>
                          <Button className='bg-blueprimary'>
                            <IconBrandPaypal /> &nbsp; Comprar
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className='flex flex-col shadow-2xl rounded-2xl border-2'>
                <CardHeader>
                  <CardTitle className='flex flex-col items-center text-center text-xl text-muted-foreground'>
                   <div className='flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24'>
                    <IconCurrencyDollar size={64} className='text-blueprimary' />
                   </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                  <CardDescription>
                    <div className='text-center text-lg text-muted-foreground'>
                      <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      2 ANUALIDADES
                      </div>
                    </div>
                    <div className='grid gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-2xl'>
                            <em style={{fontFamily: 'Bungee'}}>$3200.00</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-2xl'>
                            <em style={{fontFamily: 'Bungee'}}>$195.00</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center'>
                          <h1 className='text-lg font-semibold'>
                            <em>MercadoPago<br/>(MXN)</em>
                          </h1>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='text-center '>
                          <h1 className='text-lg font-semibold'>
                            <em>PayPal<br/>(USD)</em>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4 text-center text-sm font-bold text-muted-foreground'>
                      + Comisión por uso de método de pago.
                    </div>
                    <div className='mt-6 flex items-center justify-center'>
                      <div className='flex items-center space-x-4 lg:space-x-6'>
                        <a target='_blank' href='https://mpago.la/1Pm9Efj'>
                          <Button className='bg-green-500'>
                            <IconCreditCard /> &nbsp; Comprar
                          </Button>
                        </a>
                        <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PAWA9M66EW2ZE' target='_blank'>
                          <Button className='bg-blueprimary'>
                            <IconBrandPaypal /> &nbsp; Comprar
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className='py-6 flex flex-row items-center justify-center'>
            <hr className="w-[25%] border-blueprimary border-t-4" /> 
            <div className='mx-4'>
              <IconBrandCashapp size={48} className='text-blueprimary'/>
            </div>
            <hr className="w-[25%] border-blueprimary border-t-4" /> 
          </div>
          <div className='py-12'>
            <h1 className='mb-4 text-5xl text-center font-extralight'>
              Deposito OXXO / 7-Eleven / Transferencia (MXN)
            </h1>
            <div className='mt-16 grid gap-7 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:px-24'>
              <Card className='flex flex-col shadow-2xl rounded-2xl border-2'>
                <CardHeader>
                  <CardTitle className='flex flex-col items-center text-center text-xl text-muted-foreground'>
                   <div className='flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24'>
                    <IconBuildingStore size={64} className='text-blueprimary' />
                   </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                  <CardDescription>
                    <div className='text-center text-lg text-muted-foreground'>
                      <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      OXXO
                      </div>
                    </div>
                    <div className='text-center'>
                      <h1 className='text-2xl'>
                        <em style={{fontFamily: 'Bungee'}}>4152 3140 0408 8871</em>
                      </h1>
                    </div>
                    <div className='text-center'>
                      <h1 className='text-lg font-semibold'>
                        <em>BBVA Bancomer</em>
                      </h1>
                    </div>
                    <div className='mt-4 text-center'>
                      <h1 className='text-lg font-normal'>
                        <b>Monto</b>: <em>Dependiendo del plazo elegido</em>
                      </h1>
                    </div>
                    <div className='mt-2 text-center'>
                      <h1 className='text-lg font-normal'>
                        <b>Nombre</b>: <em>Jorge Hernandez</em>
                      </h1>
                    </div>
                    <div className='mt-4 text-center text-sm font-semibold text-muted-foreground'>
                      <em>Puede realizar su pago en <b>OXXO</b> solamente brindando el número de tarjeta y monto a depositar, también puede realizar <b>transferencia</b> desde su banca móvil.</em>
                    </div>
                    <div className='mt-4 text-center text-sm font-bold text-muted-foreground'>
                      <em>Una vez realizado su pago envíenos su comprobante por WhatsApp.</em>
                    </div>
                    <div className='mt-6 flex items-center justify-center'>
                      <div className='flex items-center space-x-4 lg:space-x-6'>
                        <a target='_blank' href='https://wa.me/+5218125949904/?text=Realice mi pago'>
                          <Button className='bg-green-500'>
                            <IconBrandWhatsapp /> &nbsp; Ya pagué
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className='flex flex-col shadow-2xl rounded-2xl border-2'>
                <CardHeader>
                  <CardTitle className='flex flex-col items-center text-center text-xl text-muted-foreground'>
                   <div className='flex justify-center items-center border-2 border-blueprimary rounded-full w-24 h-24'>
                    <IconBuildingStore size={64} className='text-blueprimary' />
                   </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                  <CardDescription>
                    <div className='text-center text-lg text-muted-foreground'>
                      <div className="mb-4 text-xl font-semibold text-muted-foreground">
                      7-Eleven
                      </div>
                    </div>
                    <div className='text-center'>
                      <h1 className='text-2xl'>
                        <em style={{fontFamily: 'Bungee'}}>4189 1431 1341 8316</em>
                      </h1>
                    </div>
                    <div className='text-center'>
                      <h1 className='text-lg font-semibold'>
                        <em>Banorte</em>
                      </h1>
                    </div>
                    <div className='mt-4 text-center'>
                      <h1 className='text-lg font-normal'>
                        <b>Monto</b>: <em>Dependiendo del plazo elegido</em>
                      </h1>
                    </div>
                    <div className='mt-2 text-center'>
                      <h1 className='text-lg font-normal'>
                        <b>Nombre</b>: <em>Jorge Hernandez</em>
                      </h1>
                    </div>
                    <div className='mt-4 text-center text-sm font-semibold text-muted-foreground'>
                      <em>Puede realizar su pago en <b>7-Eleven</b>, <b>Farmacias Guadalajara</b>, <b>Farmacias del Ahorro</b> y/o <b>Soriana</b> solamente brindando el número de tarjeta y monto a depositar, también puede realizar <b>transferencia</b> desde su banca móvil.</em>
                    </div>
                    <div className='mt-4 text-center text-sm font-bold text-muted-foreground'>
                      <em>Una vez realizado su pago envíenos su comprobante por WhatsApp.</em>
                    </div>
                    <div className='mt-6 flex items-center justify-center'>
                      <div className='flex items-center space-x-4 lg:space-x-6'>
                        <a target='_blank' href='https://wa.me/+5218125949904/?text=Realice mi pago'>
                          <Button className='bg-green-500'>
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
        </div>
        <div className='my-6 flex flex-row items-center justify-center'>
            <div className="w-[75%] h-24 bg-blueprimary" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0% 0%)' }}>
            </div>
            <div className="w-[25%] h-24 bg-blueprimary" style={{ clipPath: 'polygon(100% 100%, 0% 100%, 100% 0%)' }}>
            </div>
        </div>
        <div className="relative flex-1 space-y-4 sm:px-16 md:px-32 xl:px-64 mt-12">
          <div className='py-12'>
            <h1 className='mb-6 text-5xl text-center font-extralight'>
              <em>Testimoniales</em>
            </h1>
            <h1 className='mb-6 text-2xl text-center font-extralight'>
              Lo que nuestros clientes opinan de nuestro servicio:
            </h1>
            <div className='mt-16 2xl:px-24'>
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
