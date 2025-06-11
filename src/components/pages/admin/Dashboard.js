import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// dashboard.jsx
import { useEffect, useState } from 'react';
export default function Dashboard() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000', {
            credentials: 'include'
        }).then(async (res) => {
            if (res.ok) {
                const data = await res.json();
                setUser(data);
            }
            else {
                window.location.href = '/login';
            }
        });
    }, []);
    if (!user)
        return _jsx("p", { children: "Carregando..." });
    return _jsxs("h1", { children: ["Bem-vindo, ", user.username, "!"] });
}
