const API_URL = 'http://localhost:8000/api'; // ou use import.meta.env.VITE_API_URL se estiver usando Vite

// Recupera o token do localStorage
const token = localStorage.getItem('authToken');

// Função para buscar todos os usuários
export async function getUsers() {
  const response = await fetch(`${API_URL}/users/`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar usuários');
  }

  return await response.json();
}

// Função para criar um novo usuário
export async function createUser(userData) {
  const response = await fetch(`${API_URL}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Authorization': 'Bearer  + accessToken'
    },  // Headers para requisições autenticadas
    // Headers para requisições autenticadas

    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Erro ao criar usuário');
  }

  return await response.json();
}
