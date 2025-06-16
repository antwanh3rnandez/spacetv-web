import { HeroPages } from "../../components/pages/HeroPages";
import { Footer } from "../../components/pages/Footer";

export const PoliticaPrivacidadPage = () => {
  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Política de Privacidad"/>
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className='py-12'>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h1 className="text-4xl font-bold mb-8">Política de Privacidad de SpaceTV+</h1>
              
              <p className="mb-6">
                Última actualización: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Información que Recopilamos</h2>
                <p>
                  En SpaceTV+, recopilamos la siguiente información para mejorar su experiencia:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Información de la cuenta (correo electrónico, nombre de usuario)</li>
                  <li>Datos de uso y preferencias</li>
                  <li>Información de facturación</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Uso de la Información</h2>
                <p>
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Proporcionar y mantener nuestros servicios</li>
                  <li>Mejorar y personalizar su experiencia</li>
                  <li>Enviar actualizaciones y notificaciones importantes</li>
                  <li>Prevenir actividades fraudulentas</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Protección de Datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal, incluyendo:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Encriptación de datos sensibles</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Monitoreo regular de sistemas de seguridad</li>
                  <li>Cumplimiento con estándares de seguridad de la industria</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Derechos del Usuario</h2>
                <p>
                  Los usuarios tienen derecho a:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Acceder a su información personal</li>
                  <li>Corregir datos inexactos</li>
                  <li>Solicitar la eliminación de datos</li>
                  <li>Retirar el consentimiento en cualquier momento</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Contacto</h2>
                <p>
                  Para cualquier consulta sobre esta política de privacidad, puede contactarnos a través de:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Correo electrónico: privacy@spacetv.com.mx</li>
                  <li>Formulario de contacto en nuestra página web</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};