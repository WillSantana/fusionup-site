import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
const posts = [
    {
        title: "O impacto da inteligência artificial no marketing digital",
        description: "Veja como ferramentas como o ChatGPT estão mudando a forma como produzimos conteúdo para redes sociais.",
        image: "/images/ai-marketing.png",
        category: "Tendências",
        author: "Laura Martins",
        authorRole: "Especialista em Marketing Digital"
    },
    {
        title: "Instagram Threads: ameaça ao Twitter ou moda passageira?",
        description: "Analisamos o crescimento da nova rede social da Meta e seu impacto no cenário digital.",
        image: "/images/threads-meta.png",
        category: "Plataformas",
        author: "Carlos Henrique",
        authorRole: "Analista de Mídias Sociais"
    },
    {
        title: "Criadores de conteúdo e saúde mental: desafios do algoritmo",
        description: "Entenda como a pressão por engajamento pode afetar o bem-estar dos profissionais de social media.",
        image: "/images/saude-mental.png",
        category: "Impacto Social",
        author: "Renata Silva",
        authorRole: "Psicóloga e Conteudista"
    }
];
export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const categories = ["Todos", ...new Set(posts.map(post => post.category))];
    const filteredPosts = selectedCategory === "Todos"
        ? posts
        : posts.filter(post => post.category === selectedCategory);
    return (_jsxs("section", { className: "py-20 px-4 md:px-8", style: { background: '#F1F5F9' }, children: [_jsx(motion.h2, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#1E3A8A]", children: "Blog Educacional" }), _jsx("p", { className: "text-center text-[#1E3A8A] max-w-xl mx-auto mb-10", children: "Explore nossos artigos sobre neuropsicopedagogia, aprendizagem e educa\u00E7\u00E3o inclusiva." }), _jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-8", children: categories.map((category, index) => (_jsx("button", { onClick: () => setSelectedCategory(category), className: `px-4 py-2 rounded-full text-sm font-medium transition-all ${index === 0
                        ? 'bg-[#1E3A8A] text-white'
                        : 'bg-white text-[#1E3A8A] border border-[#1E3A8A] hover:bg-[#DBEAFE]'}`, children: category }, index))) }), _jsx("div", { className: "mb-12", children: _jsx("input", { type: "text", placeholder: "Buscar artigo...", className: "w-full md:w-96 mx-auto block px-4 py-3 rounded-lg bg-white border border-[#94A3B8] text-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]" }) }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredPosts.map((post, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: "bg-white rounded-xl overflow-hidden border border-[#E2E8F0] h-full flex flex-col hover:translate-y-[-5px] transition-all duration-200", children: [_jsx("img", { src: post.image, alt: post.title, className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-4 flex flex-col flex-grow", children: [_jsx("span", { className: "px-3 py-1 rounded-full text-xs font-semibold bg-[#1E3A8A] text-white w-fit mb-2", children: post.category }), _jsx("h3", { className: "text-xl font-bold text-[#1E3A8A] mb-3 flex-grow", children: post.title }), _jsx("p", { className: "text-[#1E3A8A] mb-4 flex-grow", children: post.description }), _jsxs("div", { className: "mt-auto", children: [_jsx("p", { className: "text-sm font-medium text-[#1E3A8A]", children: post.author }), _jsx("p", { className: "text-xs text-[#94A3B8]", children: post.authorRole })] }), _jsx("button", { className: "mt-4 w-full py-2 rounded-lg border border-[#1E3A8A] text-[#1E3A8A] font-medium hover:bg-[#DBEAFE] transition-all", children: "Ler artigo completo" })] })] }, index))) }), _jsx("div", { className: "text-center mt-12", children: _jsx("button", { className: "px-8 py-3 rounded-lg font-medium text-[#1E3A8A] bg-white border border-[#94A3B8] hover:bg-[#DBEAFE] transition-all", children: "Carregar mais artigos" }) }), _jsxs("div", { className: "mt-20 bg-white rounded-xl p-8 border border-[#E2E8F0]", children: [_jsx("h3", { className: "text-2xl font-bold text-[#1E3A8A] mb-4", children: "Inscreva-se na nossa newsletter" }), _jsx("p", { className: "text-[#1E3A8A] mb-6", children: "Receba atualiza\u00E7\u00F5es e novos artigos diretamente no seu e-mail." }), _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsx("input", { type: "email", placeholder: "Seu melhor e-mail", className: "flex-grow px-4 py-3 rounded-lg bg-white border border-[#94A3B8] text-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]" }), _jsx("button", { className: "px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105", style: {
                                    background: '#1E3A8A',
                                    boxShadow: '0 4px 15px rgba(30, 58, 138, 0.3)'
                                }, children: "INSCREVER" })] })] })] }));
}
