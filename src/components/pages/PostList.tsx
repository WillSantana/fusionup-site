import { useEffect, useState } from "react";
// Update the import path below if your postService file is in a different location
import { getPosts, Post } from "../../services/postService";

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err: any) {
        setErro(err.message || "Erro ao buscar posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>🔄 Carregando posts...</p>;
  if (erro) return <p className="text-red-500">❌ {erro}</p>;
  if (posts.length === 0) return <p>Nenhum post encontrado.</p>;

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <div key={post._id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{post.titulo}</h2>
          <p>{post.conteudo.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}
