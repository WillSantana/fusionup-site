import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { postService } from "../../services/postService";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPosts();
  }, [search]);

  const loadPosts = async () => {
    setLoading(true);
    setError(null);
    const result = await postService.getPosts({ search });

    if (result.success) {
      setPosts(result.data.results);
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  const categories = ["Todos", ...new Set(posts.map((post) => post.category))];

  const filteredPosts =
    selectedCategory === "Todos"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  if (loading) return <div>Carregando posts...</div>;
  if (error) return <div className="text-red-500 text-center">Erro: {error}</div>;

  return (
    <section className="py-20 px-4 md:px-8" style={{ background: "#F1F5F9" }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#1E3A8A]"
      >
        Blog Educacional
      </motion.h2>

      <p className="text-center text-[#1E3A8A] max-w-xl mx-auto mb-10">
        Explore nossos artigos sobre neuropsicopedagogia, aprendizagem e
        educação inclusiva.
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              index === 0
                ? "bg-[#1E3A8A] text-white"
                : "bg-white text-[#1E3A8A] border border-[#1E3A8A] hover:bg-[#DBEAFE]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-12">
        <input
          type="text"
          placeholder="Buscar artigo..."
          className="w-full md:w-96 mx-auto block px-4 py-3 rounded-lg bg-white border border-[#94A3B8] text-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] h-full flex flex-col hover:translate-y-[-5px] transition-all duration-200"
            >
              <img
                src={post.image || "https://via.placeholder.com/400x200"}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1E3A8A] text-white w-fit mb-2">
                  {post.category || "Geral"}
                </span>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3 flex-grow">
                  {post.title}
                </h3>
                <p className="text-[#1E3A8A] mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-medium text-[#1E3A8A]">
                    Por {post.author}
                  </p>
                  <p className="text-xs text-[#94A3B8]">
                    {new Date(post.created_at).toLocaleDateString()}
                  </p>
                </div>
                <button className="mt-4 w-full py-2 rounded-lg border border-[#1E3A8A] text-[#1E3A8A] font-medium hover:bg-[#DBEAFE] transition-all">
                  Ler artigo completo
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center text-[#1E3A8A]">
            Nenhum post encontrado.
          </div>
        )}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 rounded-lg font-medium text-[#1E3A8A] bg-white border border-[#94A3B8] hover:bg-[#DBEAFE] transition-all">
          Carregar mais artigos
        </button>
      </div>

      <div className="mt-20 bg-white rounded-xl p-8 border border-[#E2E8F0]">
        <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">
          Inscreva-se na nossa newsletter
        </h3>
        <p className="text-[#1E3A8A] mb-6">
          Receba atualizações e novos artigos diretamente no seu e-mail.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="flex-grow px-4 py-3 rounded-lg bg-white border border-[#94A3B8] text-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
          />
          <button
            className="px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "#1E3A8A",
              boxShadow: "0 4px 15px rgba(30, 58, 138, 0.3)",
            }}
          >
            INSCREVER
          </button>
        </div>
      </div>
    </section>
  );
}

