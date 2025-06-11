import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('historia');
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    
    // Verificar se há um hash na URL para definir a aba ativa
    if (location.hash === '#equipe') {
      setActiveTab('equipe');
    } else {
      setActiveTab('historia');
    }
  }, [location]);

  return (
    <div className="pt-28 pb-16">
      {/* Hero Section */}
      <section className="bg-[#F0F0F2] py-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-6">Sobre Nós</h1>
            <p className="text-gray-600 text-lg mb-8">
              Conheça a FusionUp, nossa história e a equipe de especialistas que transformam ideias em experiências digitais.
            </p>
            
            {/* Tabs Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <button 
                onClick={() => setActiveTab('historia')}
                className={`px-6 py-3 rounded-md transition-all ${
                  activeTab === 'historia' 
                    ? 'bg-[#0066B3] text-white font-medium' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Nossa História
              </button>
              <button 
                onClick={() => setActiveTab('equipe')}
                className={`px-6 py-3 rounded-md transition-all ${
                  activeTab === 'equipe' 
                    ? 'bg-[#0066B3] text-white font-medium' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Nossa Equipe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* História Tab Content */}
            {activeTab === 'historia' && (
              <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Como tudo começou</h2>
                  <div className="prose prose-lg text-gray-600">
                    <p>
                      A FusionUp nasceu em 2018 a partir da visão de quatro profissionais apaixonados por tecnologia e comunicação digital, que identificaram uma lacuna no mercado: empresas precisavam de uma abordagem integrada para sua presença online, não apenas soluções fragmentadas.
                    </p>
                    <p>
                      Inicialmente focada apenas em desenvolvimento de websites, a FusionUp rapidamente expandiu sua atuação ao perceber que o verdadeiro valor para os clientes estava na fusão estratégica entre desenvolvimento técnico e comunicação digital eficiente.
                    </p>
                    <p>
                      O nome "FusionUp" representa exatamente nossa essência: a fusão de diferentes expertises digitais para elevar (up) os negócios de nossos clientes a um novo patamar no ambiente online.
                    </p>
                  </div>
                </div>

                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Missão</h2>
                  <div className="prose prose-lg text-gray-600">
                    <p>
                      Desde o início, nossa missão tem sido clara: transformar a presença digital de empresas através de estratégias integradas que combinam tecnologia de ponta, design inovador e comunicação estratégica.
                    </p>
                    <p>
                      Acreditamos que o sucesso digital não vem de ações isoladas, mas de uma abordagem holística que considera todos os pontos de contato entre uma marca e seu público.
                    </p>
                    <p>
                      Por isso, desenvolvemos uma metodologia própria que integra desenvolvimento web, gestão de mídias sociais e estratégias de marketing digital em um único ecossistema coerente e eficiente.
                    </p>
                  </div>
                </div>

                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Evolução e Crescimento</h2>
                  <div className="prose prose-lg text-gray-600">
                    <p>
                      Ao longo dos anos, a FusionUp cresceu de uma pequena startup para uma agência digital completa, atendendo clientes de diversos segmentos e portes. Nossa equipe, inicialmente composta pelos quatro fundadores, hoje conta com especialistas em diversas áreas do universo digital.
                    </p>
                    <p>
                      Em 2020, mesmo diante dos desafios globais, expandimos nossa atuação para ajudar empresas a acelerarem sua transformação digital, um movimento que se tornou essencial para a sobrevivência de muitos negócios.
                    </p>
                    <p>
                      Em 2022, lançamos nossa plataforma proprietária de análise de performance digital, consolidando nossa posição como uma empresa que não apenas executa, mas também mensura e otimiza resultados com base em dados concretos.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossos Valores</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-[#E6F0F7] p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0066B3] mb-3">Inovação Constante</h3>
                      <p className="text-gray-600">
                        Buscamos continuamente novas tecnologias e abordagens para manter nossos clientes à frente no ambiente digital.
                      </p>
                    </div>
                    <div className="bg-[#E6F0F7] p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0066B3] mb-3">Resultados Mensuráveis</h3>
                      <p className="text-gray-600">
                        Acreditamos que toda estratégia digital deve gerar resultados concretos e mensuráveis para o negócio.
                      </p>
                    </div>
                    <div className="bg-[#E6F0F7] p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0066B3] mb-3">Transparência</h3>
                      <p className="text-gray-600">
                        Mantemos uma comunicação clara e honesta com nossos clientes em todas as etapas do processo.
                      </p>
                    </div>
                    <div className="bg-[#E6F0F7] p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0066B3] mb-3">Colaboração</h3>
                      <p className="text-gray-600">
                        Trabalhamos em parceria com nossos clientes, entendendo que o sucesso deles é o nosso sucesso.
                      </p>
                    </div>
                  </div>
                  <div className="prose prose-lg text-gray-600">
                    <p>
                      Hoje, a FusionUp se orgulha de ser uma referência em soluções digitais integradas, ajudando empresas de todos os portes a construírem uma presença digital sólida, estratégica e orientada a resultados.
                    </p>
                    <p>
                      Nossa história continua sendo escrita a cada projeto, a cada cliente e a cada inovação que trazemos para o mercado. E convidamos você a fazer parte dessa jornada.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Equipe Tab Content */}
            {activeTab === 'equipe' && (
              <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Conheça Nossos Especialistas</h2>
                  <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    Nossa equipe é formada por profissionais com 5 a 10 anos de experiência em suas áreas, 
                    apaixonados por tecnologia e comprometidos em entregar soluções digitais de excelência.
                  </p>
                </div>
                
                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  {/* Membro 1 */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105">
                    <div className="h-64 bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                        <span className="text-5xl text-blue-500 font-bold">MR</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Marcos Ribeiro</h3>
                      <p className="text-[#0066B3] font-medium mb-4">CEO & Desenvolvedor Full-Stack</p>
                      <p className="text-gray-600 mb-4">
                        Com mais de 10 anos de experiência em desenvolvimento web e gestão de projetos digitais, 
                        Marcos lidera nossa equipe com visão estratégica e conhecimento técnico aprofundado.
                      </p>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-500 text-sm">
                          <strong>Especialidades:</strong> React, Node.js, Arquitetura de Sistemas, Gestão de Projetos
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Membro 2 */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105">
                    <div className="h-64 bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                        <span className="text-5xl text-purple-500 font-bold">CS</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Carolina Silva</h3>
                      <p className="text-[#0066B3] font-medium mb-4">Diretora de Design & UX</p>
                      <p className="text-gray-600 mb-4">
                        Carolina transforma conceitos em experiências visuais impactantes. Com 8 anos de experiência, 
                        ela lidera nossa equipe de design com foco em usabilidade e estética.
                      </p>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-500 text-sm">
                          <strong>Especialidades:</strong> UI/UX Design, Design Systems, Branding, Pesquisa de Usuários
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Membro 3 */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105">
                    <div className="h-64 bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                        <span className="text-5xl text-amber-500 font-bold">RA</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Rafael Almeida</h3>
                      <p className="text-[#0066B3] font-medium mb-4">Diretor de Marketing Digital</p>
                      <p className="text-gray-600 mb-4">
                        Com 7 anos de experiência em marketing digital, Rafael desenvolve estratégias 
                        orientadas a dados que maximizam o ROI e a visibilidade online de nossos clientes.
                      </p>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-500 text-sm">
                          <strong>Especialidades:</strong> SEO, Mídia Paga, Analytics, Estratégia de Conteúdo
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Membro 4 */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105">
                    <div className="h-64 bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                        <span className="text-5xl text-emerald-500 font-bold">JM</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Juliana Mendes</h3>
                      <p className="text-[#0066B3] font-medium mb-4">Gerente de Projetos & CTO</p>
                      <p className="text-gray-600 mb-4">
                        Especialista em gerenciamento de projetos digitais complexos, Juliana garante 
                        que nossas entregas sejam pontuais, dentro do orçamento e com excelência técnica.
                      </p>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-500 text-sm">
                          <strong>Especialidades:</strong> Metodologias Ágeis, DevOps, Arquitetura Cloud, Gestão de Equipes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Cultura da Equipe */}
                <div className="bg-[#E6F0F7] p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-[#0066B3] mb-4">Nossa Cultura de Trabalho</h3>
                  <p className="text-gray-700 mb-6">
                    Na FusionUp, acreditamos que grandes resultados vêm de uma cultura forte. 
                    Valorizamos a colaboração, a inovação constante e o equilíbrio entre vida pessoal e profissional.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Aprendizado Contínuo</h4>
                      <p className="text-gray-600 text-sm">
                        Investimos no desenvolvimento profissional da nossa equipe com treinamentos regulares e participação em eventos do setor.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Colaboração</h4>
                      <p className="text-gray-600 text-sm">
                        Trabalhamos em um ambiente onde todas as ideias são valorizadas e a colaboração entre diferentes áreas é incentivada.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Inovação</h4>
                      <p className="text-gray-600 text-sm">
                        Dedicamos tempo para experimentação e desenvolvimento de novas soluções que possam beneficiar nossos clientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
