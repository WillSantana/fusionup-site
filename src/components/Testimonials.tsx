import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Silva",
      company: "Empresa ABC",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel felis consequat, venenatis massa, porttitor neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      rating: 5,
      image: "/testimonial1.jpg"
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      company: "Startup XYZ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel felis consequat, venenatis massa, porttitor neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      rating: 4,
      image: "/testimonial2.jpg"
    },
    {
      id: 3,
      name: "Patrícia Santos",
      company: "Empresa 123",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel felis consequat, venenatis massa, porttitor neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      rating: 5,
      image: "/testimonial3.jpg"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials');
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

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-[#E6F0F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">O que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos clientes é o nosso maior sucesso.
          </p>
        </div>

        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#4D9FD6] rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#E6F0F7] rounded-full"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Client Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#E6F0F7] shadow-md flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image || "/default-avatar.jpg"} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="flex mb-3">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
                <p className="text-gray-600 italic mb-6">
                  "{testimonials[activeIndex].text}"
                </p>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{testimonials[activeIndex].name}</h4>
                  <p className="text-[#0066B3]">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-[#0066B3] text-[#0066B3] flex items-center justify-center hover:bg-[#0066B3] hover:text-white transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-[#0066B3] text-[#0066B3] flex items-center justify-center hover:bg-[#0066B3] hover:text-white transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'w-6 bg-[#0066B3]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
