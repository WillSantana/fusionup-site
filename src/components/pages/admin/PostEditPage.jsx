import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../../services/api';
import PostForm from '../../PostForm';

function PostEditPage() {
  const { id } = useParams(); // Pega o ID do post da URL
  const navigate = useNavigate();
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
        console.error("Erro ao buscar post para edição:", err);
        setError(err.response?.data?.message || 'Falha ao carregar o post para edição.');
        // Se der erro 404 ou outro, talvez redirecionar?
        // if (err.response?.status === 404) navigate('/dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Carregando dados do post...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>Erro: {error}</div>;
  }

  if (!post) {
    // Isso não deve acontecer se o erro 404 for tratado, mas por segurança
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Post não encontrado.</div>;
  }

  return (
    <div>
      {/* O título "Editar Post" já está dentro do PostForm quando postToEdit é passado */}
      <PostForm postToEdit={post} />
    </div>
  );
}

export default PostEditPage;
