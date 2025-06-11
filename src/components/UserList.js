// components/UserList.js
import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/users';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch(err => console.error('Erro:', err.message));
  }, []);

  return (
    <div>
      <h2>Usuários Cadastrados</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.email} - {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
