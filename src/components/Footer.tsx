import { Button } from "../components/ui/button"
import { 
  IconBrandFacebook, 
  IconBrandTelegram, 
} from '@tabler/icons-react/';

export const Footer = () => {
    return (
        <>
        <div className="mt-12 px-8 h-36 bg-slate-300">
          <div className="w-full h-full flex flex-col xl:flex-row space-y-4 xl:space-x-16 items-center justify-center">
            <h2 className="text-5xl text-center font-extralight">
              <em className='font-semibold'>Únete a la familia! </em>
              <em>Adquiere nuestro servicio.</em>
            </h2>
            <a href='#paquetes'>
              <Button className='bg-blueprimary p-4'>Comprar Servicio</Button>
            </a>
          </div>
        </div>
        <div className='flex flex-row h-36 shadow-2xl'>
          <div className='w-[50%] bg-blueprimary flex flex-row items-center justify-center space-x-4 p-8'>
            <p className='md:text-xl xl:text-4xl font-normal text-white text-center'>NUEVA PÁGINA DE FACEBOOK</p>
            <IconBrandFacebook size={64} className='text-white'/>
          </div>
          <div className='w-[50%] bg-orange-500 flex flex-row items-center justify-center space-x-4 p-8'>
            <IconBrandTelegram size={64} className='text-white'/>
            <p className='md:text-xl xl:text-4xl font-normal text-white text-center'>ÚNETE A NUESTRO TELEGRAM</p>
          </div>
        </div>
        <div className='w-full h-24 flex flex-col items-center justify-center'>
          <h1 className=''>
            © 2023 SpaceTV+. Sitio web creado por GethyMX
          </h1>
        </div>
        </>
    )
}