import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
const LoginPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!form.email || !form.password) {
            setError('Preencha todos os campos');
            return;
        }
        try {
            await login(form.email, form.password);
            navigate('/admin/dashboard');
        }
        catch (err) {
            console.error('Erro durante o login:', err);
            setError(err?.response?.data?.detail || 'Erro ao fazer login');
        }
    };
    return (_jsxs("div", { className: "max-w-sm mx-auto mt-10 p-4 border rounded shadow", children: [_jsx("h2", { className: "text-2xl mb-4 font-bold text-center", children: "Login" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "email", placeholder: "Email", value: form.email, onChange: (e) => setForm({ ...form, email: e.target.value }), className: "w-full mb-2 p-2 border rounded", required: true }), _jsx("input", { type: "password", placeholder: "Senha", value: form.password, onChange: (e) => setForm({ ...form, password: e.target.value }), className: "w-full mb-2 p-2 border rounded", required: true }), _jsx("button", { type: "submit", className: "w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition", children: "Entrar" })] }), error && _jsx("p", { className: "text-red-500 mt-2 text-sm", children: error })] }));
};
export default LoginPage;
