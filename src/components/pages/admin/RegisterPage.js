import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { register, loading } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }
        if (password.length < 6) {
            setError('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        const result = await register(email, password);
        if (!result.success) {
            setError(result.message || 'Falha no registro. Tente novamente.');
        }
        else {
            navigate('/admin/dashboard'); // Navega manualmente após sucesso
        }
    };
    return (_jsxs("div", { className: "max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-md text-center", children: [_jsx("h2", { className: "text-2xl font-semibold mb-4 text-blue-700", children: "Cadastro - Gerenciador de Blog" }), _jsxs("form", { onSubmit: handleSubmit, className: "text-left", children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "email", className: "block font-medium", children: "Email:" }), _jsx("input", { type: "email", id: "email", className: "w-full border p-2 mt-1 rounded", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "password", className: "block font-medium", children: "Senha:" }), _jsx("input", { type: "password", id: "password", className: "w-full border p-2 mt-1 rounded", value: password, onChange: (e) => setPassword(e.target.value), required: true, minLength: 6 })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "confirmPassword", className: "block font-medium", children: "Confirmar Senha:" }), _jsx("input", { type: "password", id: "confirmPassword", className: "w-full border p-2 mt-1 rounded", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), required: true })] }), error && _jsx("p", { className: "text-red-600 mb-4", children: error }), _jsx("button", { type: "submit", disabled: loading, className: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition", children: loading ? 'Registrando...' : 'Registrar' })] }), _jsxs("p", { className: "mt-4", children: ["J\u00E1 tem uma conta?", ' ', _jsx(Link, { to: "/admin/login", className: "text-blue-600 hover:underline", children: "Fa\u00E7a login" })] })] }));
}
export default RegisterPage;
