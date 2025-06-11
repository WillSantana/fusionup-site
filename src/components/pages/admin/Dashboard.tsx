// dashboard.jsx
import { useEffect, useState } from 'react';

type User = {
  username: string;
  // add other user properties if needed
};

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('http://localhost:8000', {
      credentials: 'include'
    }).then(async res => {
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        window.location.href = '/login';
      }
    });
  }, []);

  if (!user) return <p>Carregando...</p>;

  return <h1>Bem-vindo, {user.username}!</h1>;
}
