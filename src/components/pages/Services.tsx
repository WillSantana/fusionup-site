import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-xl shadow-md p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl animate-fade-in-up`}
      data-animation-delay={delay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 text-[#0066B3]">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href="#" 
        className={`inline-flex items-center text-[#0066B3] font-medium transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
      >
        Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-16 bg-[#E6F0F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções para impulsionar a presença digital do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={
              <div className="w-12 h-12 bg-[#E6F0F7] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            }
            title="Criação de Sites"
            description="Desenvolvemos sites responsivos e intuitivos para potencializar seu negócio no ambiente digital, com foco em experiência do usuário e performance."
            delay={100}
          />

          <ServiceCard 
            icon={
              <div className="w-12 h-12 bg-[#E6F0F7] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
            }
            title="Mídias Sociais"
            description="Gerenciamos suas redes sociais com estratégias personalizadas, conteúdo engajador e análise de resultados para maximizar sua presença digital."
            delay={200}
          />

          <ServiceCard 
            icon={
              <div className="w-12 h-12 bg-[#E6F0F7] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            }
            title="Design Gráfico"
            description="Criamos identidades visuais e materiais gráficos que comunicam a essência da sua marca, com designs modernos, criativos e profissionais."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
