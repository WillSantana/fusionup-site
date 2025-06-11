import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../../services/api';

function PostViewPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError('');
      try {
        const { data } = await api.get(`/posts/${id}`);
        if (data.success) {
          setPost(data.data);
        } else {
          setError('Post não encontrado.');
        }
      } catch (err) {
        console.error("Erro ao buscar post para visualização:", err);
        setError(err.response?.data?.message || 'Falha ao carregar o post.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Carregando post...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>Erro: {error}</div>;
  }

  if (!post) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Post não encontrado.</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Link to="/dashboard" style={{ marginBottom: '20px', display: 'inline-block' }}>&larr; Voltar para Lista</Link>
      <h1>{post.titulo}</h1>
      <p><strong>Autor:</strong> {post.autor?.email || 'Desconhecido'} | <strong>Status:</strong> {post.status} | <strong>Publicado em:</strong> {new Date(post.createdAt).toLocaleDateString()}</p>
      {post.imagemCapa && post.imagemCapa !== '/uploads/no-photo.jpg' && (
        <img src={`http://localhost:5001${post.imagemCapa}`} alt={post.titulo} style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
      )}
      {/* Renderiza o conteúdo HTML do editor de texto rico */}
      <div dangerouslySetInnerHTML={{ __html: post.conteudo }} />
      <div style={{ marginTop: '20px' }}>
        <strong>Tags:</strong> {post.tags?.join(', ') || 'Nenhuma'}
      </div>
    </div>
  );
}

export default PostViewPage;
