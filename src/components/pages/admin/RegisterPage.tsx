import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirm: '',
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.password_confirm) {
      setError('As senhas não coincidem.');
      return;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    const result = await register(formData);
    if (!result.success) {
      setError(result.message || JSON.stringify(result.errors) || 'Falha no registro. Tente novamente.');
    } else {
      navigate('/admin/login'); // Redireciona para login após registro bem-sucedido
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Cadastro - Gerenciador de Blog</h2>
      <form onSubmit={handleSubmit} className="text-left">
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border p-2 mt-1 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="first_name" className="block font-medium">Nome:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="w-full border p-2 mt-1 rounded"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last_name" className="block font-medium">Sobrenome:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="w-full border p-2 mt-1 rounded"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border p-2 mt-1 rounded"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-medium">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            name="password_confirm"
            className="w-full border p-2 mt-1 rounded"
            value={formData.password_confirm}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Registrar
        </button>
      </form>
      <p className="mt-4">
        Já tem uma conta?{' '}
        <Link to="/admin/login" className="text-blue-600 hover:underline">
          Faça login
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;

