import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function PostForm({ postToEdit = null }) {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState(postToEdit?.titulo || '');
  const [conteudo, setConteudo] = useState(postToEdit?.conteudo || '');
  const [tags, setTags] = useState(postToEdit?.tags?.join(', ') || '');
  const [status, setStatus] = useState(postToEdit?.status || 'rascunho');
  const [imagemCapa, setImagemCapa] = useState(null); // Para o arquivo selecionado
  const [imagemCapaPreview, setImagemCapaPreview] = useState(postToEdit?.imagemCapa ? `http://localhost:5001${postToEdit.imagemCapa}` : null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const editorRef = useRef(null);

  // Chave da API TinyMCE (obtenha uma chave gratuita em tiny.cloud)
  // É recomendado usar uma variável de ambiente para isso
  const tinyApiKey = 'afcgx4bw7cba9el40xu4d5lc4920itj4p78xy9vwh7r40cxw'; // SUBSTITUA PELA SUA CHAVE
  const handleEditorChange = (content) => {
    setConteudo(content);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagemCapa(file);
      // Gera preview da imagem selecionada
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemCapaPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      // Se o usuário cancelar a seleção, volta para a imagem original (se editando)
      setImagemCapa(null);
      setImagemCapaPreview(postToEdit?.imagemCapa ? `http://localhost:5001${postToEdit.imagemCapa}` : null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('conteudo', conteudo);
    formData.append('tags', tags); // Envia como string, backend pode splitar
    formData.append('status', status);
    if (imagemCapa) {
      formData.append('imagemCapa', imagemCapa);
    }

    try {
      let response;
      if (postToEdit) {
        // Editando post existente
        response = await api.put(`/posts/${postToEdit._id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        // Criando novo post
        response = await api.post('/posts', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      if (response.data.success) {
        navigate('/dashboard'); // Volta para a lista após sucesso
      } else {
        setError(response.data.message || 'Erro ao salvar post.');
      }
    } catch (err) {
      console.error('Erro ao salvar post:', err);
      setError(err.response?.data?.message || 'Ocorreu um erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{postToEdit ? 'Editar Post' : 'Criar Novo Post'}</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="conteudo">Conteúdo:</label>
        <Editor
          apiKey={tinyApiKey}
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={conteudo}
          init={{
            height: 300,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
          onEditorChange={handleEditorChange}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="imagemCapa">Imagem de Capa:</label>
        <input
          type="file"
          id="imagemCapa"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'block', marginTop: '5px' }}
        />
        {imagemCapaPreview && (
          <img src={imagemCapaPreview} alt="Preview" style={{ maxWidth: '200px', maxHeight: '150px', marginTop: '10px' }} />
        )}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="tags">Tags (separadas por vírgula):</label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
        >
          <option value="rascunho">Rascunho</option>
          <option value="publicado">Publicado</option>
        </select>
      </div>

      <button type="submit" disabled={loading} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        {loading ? 'Salvando...' : (postToEdit ? 'Atualizar Post' : 'Criar Post')}
      </button>
      <button type="button" onClick={() => navigate('/dashboard')} style={{ marginLeft: '10px', padding: '10px 15px' }}>
        Cancelar
      </button>
    </form>
  );
}

export default PostForm;
