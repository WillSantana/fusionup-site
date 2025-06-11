import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-28 pb-16 bg-[#F0F0F2] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className={`w-full md:w-1/2 md:pr-12 mb-10 md:mb-0 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0066B3] leading-tight mb-4">
              Transformamos ideias em experiências digitais
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Design gráfico, mídia social e desenvolvimento de sites para elevar seu negócio ao mundo digital.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/portfolio" 
                className="bg-[#0066B3] text-white px-8 py-3 rounded-md hover:bg-[#004D86] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                Ver Portfólio
              </a>
              <a 
                href="/contato" 
                className="border-2 border-[#0066B3] text-[#0066B3] px-8 py-3 rounded-md hover:bg-[#E6F0F7] transition-all duration-300 transform hover:-translate-y-1"
              >
                Fale Conosco
              </a>
            </div>
          </div>
          
          {/* Image with 3D Elements */}
          <div className={`w-full md:w-1/2 relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden p-6">
                <img 
                  src="/images/laptop-with-idea.png" 
                  alt="Laptop com lâmpada de ideias" 
                  className="max-w-xs w-full h-auto mx-auto rounded-lg"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#4D9FD6] rounded-full opacity-80 animate-float-slow"></div>
                <div className="absolute top-1/4 -left-8 w-12 h-12 bg-[#0066B3] rounded-full opacity-70 animate-float-medium"></div>
                <div className="absolute bottom-1/3 -right-4 w-10 h-10 bg-[#4D9FD6] rounded-full opacity-60 animate-float-fast"></div>
                
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0066B3]/10 to-transparent rounded-xl"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#E6F0F7] rounded-full z-[-1]"></div>
              <div className="absolute -top-8 right-1/4 w-16 h-16 bg-[#E6F0F7] rounded-full z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
