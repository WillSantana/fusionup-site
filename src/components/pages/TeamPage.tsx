import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  bio: string;
  expertise: string[];
  image: string;
}

const TeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Carlos Mendes",
      role: "CEO & Fundador",
      experience: "10 anos de experiência",
      bio: "Especialista em estratégia digital e desenvolvimento de negócios, Carlos fundou a FusionUp com a visão de integrar tecnologia e comunicação de forma inovadora. Com formação em Sistemas de Informação e MBA em Marketing Digital, liderou projetos para grandes marcas antes de iniciar sua própria empresa.",
      expertise: ["Estratégia Digital", "Gestão de Projetos", "Desenvolvimento de Negócios", "UX/UI"],
      image: "/team-member-1.jpg"
    },
    {
      id: 2,
      name: "Ana Oliveira",
      role: "Diretora de Social Media",
      experience: "8 anos de experiência",
      bio: "Com background em Comunicação Social e especialização em Marketing Digital, Ana é responsável por todas as estratégias de mídias sociais da FusionUp. Sua abordagem analítica combinada com criatividade resultou em campanhas premiadas e cases de sucesso para diversos segmentos.",
      expertise: ["Gestão de Mídias Sociais", "Marketing de Conteúdo", "Análise de Dados", "Gestão de Comunidade"],
      image: "/team-member-2.jpg"
    },
    {
      id: 3,
      name: "Rafael Santos",
      role: "Diretor de Tecnologia",
      experience: "9 anos de experiência",
      bio: "Desenvolvedor full-stack com mestrado em Ciência da Computação, Rafael lidera a equipe de desenvolvimento da FusionUp. Sua expertise em arquitetura de sistemas e novas tecnologias garante soluções robustas e inovadoras para os clientes mais exigentes.",
      expertise: ["Desenvolvimento Web", "Arquitetura de Software", "DevOps", "Inteligência Artificial"],
      image: "/team-member-3.jpg"
    },
    {
      id: 4,
      name: "Juliana Costa",
      role: "Diretora de Design",
      experience: "7 anos de experiência",
      bio: "Designer premiada com formação em Design Gráfico e especialização em Design de Experiência do Usuário, Juliana traz uma abordagem centrada no usuário para todos os projetos. Sua capacidade de traduzir necessidades de negócio em interfaces intuitivas e atraentes é fundamental para o sucesso dos projetos.",
      expertise: ["Design de Interfaces", "Identidade Visual", "Motion Design", "Design Thinking"],
      image: "/team-member-4.jpg"
    }
  ];

  const handleNext = () => {
    if (animating) return;
    
    setAnimating(true);
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (animating) return;
    
    setAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  const handleDotClick = (index: number) => {
    if (animating || index === activeIndex) return;
    
    setAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  return (
    <div className="pt-28 pb-16">
      {/* Hero Section */}
      <section className="bg-[#F0F0F2] py-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-6">Nossa Equipe</h1>
            <p className="text-gray-600 text-lg mb-8">
              Conheça os profissionais apaixonados por inovação digital que fazem a FusionUp acontecer.
            </p>
          </div>
        </div>
      </section>

      {/* Team Interactive Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden">
              {/* Team Member Carousel */}
              <div className="flex items-center justify-center mb-12">
                <button 
                  onClick={handlePrev}
                  className="absolute left-0 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#0066B3] hover:bg-[#E6F0F7] transition-colors focus:outline-none"
                  aria-label="Previous team member"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <div className="relative w-full max-w-4xl">
                  {teamMembers.map((member, index) => (
                    <div 
                      key={member.id}
                      className={`transition-all duration-500 absolute inset-0 ${
                        index === activeIndex 
                          ? 'opacity-100 translate-x-0 z-10' 
                          : index < activeIndex 
                            ? 'opacity-0 -translate-x-full z-0' 
                            : 'opacity-0 translate-x-full z-0'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-xl shadow-lg">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                          <div className="relative">
                            <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-[#E6F0F7] shadow-inner">
                              <img 
                                src={member.image || `/placeholder-profile.jpg`} 
                                alt={member.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-[#0066B3] text-white px-4 py-2 rounded-lg shadow-md">
                              {member.experience}
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-full md:w-2/3">
                          <h2 className="text-3xl font-bold text-gray-800 mb-1">{member.name}</h2>
                          <p className="text-[#0066B3] font-medium text-xl mb-4">{member.role}</p>
                          <p className="text-gray-600 mb-6">{member.bio}</p>
                          
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Áreas de Expertise:</h3>
                            <div className="flex flex-wrap gap-2">
                              {member.expertise.map((skill, i) => (
                                <span 
                                  key={i} 
                                  className="bg-[#E6F0F7] text-[#0066B3] px-3 py-1 rounded-full text-sm font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={handleNext}
                  className="absolute right-0 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#0066B3] hover:bg-[#E6F0F7] transition-colors focus:outline-none"
                  aria-label="Next team member"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              
              {/* Dots Navigation */}
              <div className="flex justify-center space-x-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'bg-[#0066B3] w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to team member ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Team Values */}
            <div className={`mt-20 text-center transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Como Trabalhamos</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
                Nossa equipe combina diferentes expertises para oferecer soluções completas e integradas, sempre com foco em resultados mensuráveis.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#E6F0F7] p-8 rounded-xl">
                  <div className="w-16 h-16 bg-[#0066B3] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Abordagem Estratégica</h3>
                  <p className="text-gray-600">
                    Analisamos profundamente cada negócio para desenvolver estratégias personalizadas que geram resultados reais.
                  </p>
                </div>
                
                <div className="bg-[#E6F0F7] p-8 rounded-xl">
                  <div className="w-16 h-16 bg-[#0066B3] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Colaboração Multidisciplinar</h3>
                  <p className="text-gray-600">
                    Nossas equipes trabalham de forma integrada, combinando diferentes expertises para soluções completas.
                  </p>
                </div>
                
                <div className="bg-[#E6F0F7] p-8 rounded-xl">
                  <div className="w-16 h-16 bg-[#0066B3] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Foco em Resultados</h3>
                  <p className="text-gray-600">
                    Utilizamos métricas claras e análises constantes para garantir que cada ação gere impacto positivo mensurável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
