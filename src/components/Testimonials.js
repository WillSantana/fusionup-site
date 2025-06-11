import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const testimonials = [
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
        setActiveIndex((prevIndex) => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
    };
    const prevTestimonial = () => {
        setActiveIndex((prevIndex) => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
    };
    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, index) => (_jsx(Star, { className: `h-5 w-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}` }, index)));
    };
    return (_jsx("section", { id: "testimonials", className: "py-16 bg-[#E6F0F7]", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4 text-gray-800", children: "O que Nossos Clientes Dizem" }), _jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "A satisfa\u00E7\u00E3o dos clientes \u00E9 o nosso maior sucesso." })] }), _jsx("div", { className: `max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`, children: _jsxs("div", { className: "relative bg-white rounded-xl shadow-lg p-8 md:p-12", children: [_jsx("div", { className: "absolute -top-6 -right-6 w-12 h-12 bg-[#4D9FD6] rounded-full opacity-70" }), _jsx("div", { className: "absolute -bottom-4 -left-4 w-16 h-16 bg-[#E6F0F7] rounded-full" }), _jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-center", children: [_jsx("div", { className: "w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#E6F0F7] shadow-md flex-shrink-0", children: _jsx("img", { src: testimonials[activeIndex].image || "/default-avatar.jpg", alt: testimonials[activeIndex].name, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "flex mb-3", children: renderStars(testimonials[activeIndex].rating) }), _jsxs("p", { className: "text-gray-600 italic mb-6", children: ["\"", testimonials[activeIndex].text, "\""] }), _jsxs("div", { children: [_jsx("h4", { className: "font-bold text-lg text-gray-800", children: testimonials[activeIndex].name }), _jsx("p", { className: "text-[#0066B3]", children: testimonials[activeIndex].company })] })] })] }), _jsxs("div", { className: "flex justify-center mt-8 space-x-4", children: [_jsx("button", { onClick: prevTestimonial, className: "w-10 h-10 rounded-full bg-white border border-[#0066B3] text-[#0066B3] flex items-center justify-center hover:bg-[#0066B3] hover:text-white transition-colors duration-300", "aria-label": "Previous testimonial", children: _jsx(ChevronLeft, { className: "h-5 w-5" }) }), _jsx("button", { onClick: nextTestimonial, className: "w-10 h-10 rounded-full bg-white border border-[#0066B3] text-[#0066B3] flex items-center justify-center hover:bg-[#0066B3] hover:text-white transition-colors duration-300", "aria-label": "Next testimonial", children: _jsx(ChevronRight, { className: "h-5 w-5" }) })] }), _jsx("div", { className: "flex justify-center mt-4 space-x-2", children: testimonials.map((_, index) => (_jsx("button", { onClick: () => setActiveIndex(index), className: `w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-6 bg-[#0066B3]' : 'bg-gray-300'}`, "aria-label": `Go to testimonial ${index + 1}` }, index))) })] }) })] }) }));
};
export default Testimonials;
