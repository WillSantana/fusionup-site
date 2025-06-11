import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'; // Para o botão de logout

// Componente para exibir um item da lista de posts
function PostItem({ post, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm(`Tem certeza que deseja excluir o post "${post.titulo}"?`)) {
      try {
        await api.delete(`/posts/${post._id}`);
        onDelete(post._id); // Chama a função para atualizar a lista no pai
      } catch (error) {
        console.error("Erro ao excluir post:", error);
        alert("Erro ao excluir post.");
      }
    }
  };

  return (
    <div style={{ border: '1px solid #eee', padding: '15px', marginBottom: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h3>{post.titulo}</h3>
        <p>Status: {post.status} | Criado em: {new Date(post.createdAt).toLocaleDateString()}</p>
        {post.imagemCapa && post.imagemCapa !== '/uploads/no-photo.jpg' && (
          <img src={`http://localhost:5001${post.imagemCapa}`} alt={post.titulo} style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px' }} />
        )}
      </div>
      <div>
        <Link to={`/view/${post._id}`} style={{ marginRight: '10px' }}>Visualizar</Link>
        <Link to={`/edit/${post._id}`} style={{ marginRight: '10px' }}>Editar</Link>
        <button onClick={handleDelete}>Excluir</button>
      </div>
    </div>
  );
}

// Página para listar os posts
function PostListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user, logout } = useAuth(); // Pegar logout do contexto

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError('');
        const { data } = await api.get('/posts');
        setPosts(data.data);
      } catch (err) {
        console.error("Erro ao buscar posts:", err);
        setError('Falha ao carregar posts. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = (deletedPostId) => {
    setPosts(posts.filter(post => post._id !== deletedPostId));
  };

  return (
    <div style={{ maxWidth: '800px', margin: '30px auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Gerenciador de Posts</h2>
        <div>
          {user && <span style={{ marginRight: '15px' }}>Olá, {user.email}!</span>}
          <Link to="/create" style={{ marginRight: '10px' }}>
            <button>Criar Novo Post</button>
          </Link>
          <button onClick={logout}>Sair</button>
        </div>
      </div>

      {loading && <p>Carregando posts...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && posts.length === 0 && (
        <p>Nenhum post encontrado. Que tal criar o primeiro?</p>
      )}

      {!loading && !error && posts.length > 0 && (
        <div>
          {posts.map(post => (
            <PostItem key={post._id} post={post} onDelete={handleDeletePost} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostListPage;
