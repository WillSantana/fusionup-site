import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0066B3] to-[#4D9FD6] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto Para Transformar Suas Ideias em Realidade?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar a destacar seu negócio no mundo digital.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contato" 
              className="bg-white text-[#0066B3] px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg font-medium"
            >
              Fale Conosco
            </a>
            <a 
              href="/servicos" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1 font-medium"
            >
              Nossos Serviços <ArrowRight className="inline ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute left-0 bottom-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default CallToAction;
