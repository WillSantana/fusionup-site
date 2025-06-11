import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { postService } from '../../../services/postService';

type Post = {
  id: number;
  title: string;
  slug: string;
  is_published: boolean;
  author: string; // Email do autor
  created_at: string;
};

const DashboardPage = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }

    const fetchData = async () => {
      try {
        const result = await postService.getMyPosts();
        if (result.success) {
          setPosts(result.data.results);
        } else {
          setError(result.message || 'Erro ao buscar posts');
        }
      } catch (err) {
        console.error('Erro geral:', err);
        setError('Erro ao conectar com o servidor');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate, isAuthenticated]);

  if (loading) return <p className="text-center mt-10">Carregando...</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menu lateral */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6">CMS Menu</h2>
        <ul className="space-y-3">
          <li><a href="#" className="text-blue-600 hover:underline">Painel</a></li>
          <li><a href="#" className="hover:underline">Postagens</a></li>
          <li><a href="#" className="hover:underline">Usuários</a></li>
          <li><a href="#" className="hover:underline">Configurações</a></li>
        </ul>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Bem-vindo, {user?.email || 'Usuário'} 👋</h1>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Sair
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold">Postagens</h2>
            <p className="text-3xl font-bold mt-2">{posts.length}</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold">Usuários</h2>
            <p className="text-3xl font-bold mt-2">1</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold">Configurações</h2>
            <p className="text-sm text-gray-500 mt-2">Configurações básicas do CMS ativas.</p>
          </div>
        </div>

        {/* Tabela de Posts */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Lista de Postagens</h2>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {posts.length === 0 ? (
            <p className="text-gray-600">Nenhuma postagem encontrada.</p>
          ) : (
            <table className="w-full text-sm border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Título</th>
                  <th className="p-2 text-left">Slug</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Autor</th>
                  <th className="p-2 text-left">Criado em</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-medium">{post.title}</td>
                    <td className="p-2 text-gray-500">{post.slug}</td>
                    <td className="p-2">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded ${
                          post.is_published
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {post.is_published ? 'Publicado' : 'Rascunho'}
                      </span>
                    </td>
                    <td className="p-2">{post.author || 'Desconhecido'}</td>
                    <td className="p-2 text-gray-500">
                      {new Date(post.created_at).toLocaleDateString('pt-BR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;

