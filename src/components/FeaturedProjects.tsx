import { useState, useEffect } from 'react';

const FeaturedProjects = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('featured-projects');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Redesign de E-commerce',
      category: 'web',
      image: '/images/redesignbellamoda.png',
    },
    {
      id: 2,
      title: 'Campanha de Mídia Social',
      category: 'social',
      image: '/project2.jpg',
    },
    {
      id: 3,
      title: 'Identidade Visual',
      category: 'design',
      image: '/project3.jpg',
    }
  ];

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="featured-projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Projetos em Destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === 'todos' 
                  ? 'bg-[#0066B3] text-white shadow-md' 
                  : 'bg-[#E6F0F7] text-gray-700 hover:bg-[#4D9FD6] hover:text-white'
              }`}
              onClick={() => setActiveCategory('todos')}
            >
              Todos
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === 'web' 
                  ? 'bg-[#0066B3] text-white shadow-md' 
                  : 'bg-[#E6F0F7] text-gray-700 hover:bg-[#4D9FD6] hover:text-white'
              }`}
              onClick={() => setActiveCategory('web')}
            >
              Web
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === 'social' 
                  ? 'bg-[#0066B3] text-white shadow-md' 
                  : 'bg-[#E6F0F7] text-gray-700 hover:bg-[#4D9FD6] hover:text-white'
              }`}
              onClick={() => setActiveCategory('social')}
            >
              Mídias Sociais
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === 'design' 
                  ? 'bg-[#0066B3] text-white shadow-md' 
                  : 'bg-[#E6F0F7] text-gray-700 hover:bg-[#4D9FD6] hover:text-white'
              }`}
              onClick={() => setActiveCategory('design')}
            >
              Design
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image || '/placeholder-project.jpg'} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0066B3]/20"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{project.title}</h3>
                <a 
                  href={`/projeto/${project.id}`} 
                  className="inline-block text-white font-medium transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                >
                  Ver detalhes
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
