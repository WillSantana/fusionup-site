import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/pages/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Scheduling from './components/Scheduling';
import BlogPage from './components/pages/BlogPage';
import AboutPage from './components/pages/AboutPage';
import TeamPage from './components/pages/TeamPage';
import ContactPage from './components/pages/ContactPage';
import DashboardPage from './components/pages/admin/DashboardPage';
import AdminLogin from './components/pages/admin/LoginPage';
import RegisterPage from './components/pages/admin/RegisterPage';
const NotFound = () => (_jsxs("div", { className: "text-center p-8", children: [_jsx("h1", { className: "text-2xl font-bold text-red-600", children: "404 - P\u00E1gina n\u00E3o encontrada" }), _jsxs("p", { className: "mt-2", children: ["Verifique a URL ou volte para a", ' ', _jsx("a", { href: "/", className: "text-blue-600 underline", children: "p\u00E1gina inicial" }), "."] })] }));
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const { loading, isAuthenticated } = useAuth();
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);
    if (isLoading || loading) {
        return (_jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-[#F0F0F2]", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 border-4 border-[#0066B3] border-t-transparent rounded-full animate-spin mx-auto mb-4" }), _jsx("h2", { className: "text-xl font-bold text-[#0066B3]", children: "SocialM\u00EDdia" }), _jsx("p", { className: "text-gray-600", children: "Carregando experi\u00EAncia..." })] }) }));
    }
    return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(Header, {}), _jsx("main", { className: "flex-grow", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsx(Services, {}), _jsx(FeaturedProjects, {}), _jsx(Testimonials, {}), _jsx(CallToAction, {})] }) }), _jsx(Route, { path: "/contato", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "/sobre", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/equipe", element: _jsx(TeamPage, {}) }), _jsx(Route, { path: "/servicos", element: _jsx(Services, {}) }), _jsx(Route, { path: "/blog", element: _jsx(BlogPage, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Navigate, { to: "/admin/dashboard", replace: true }) }), _jsx(Route, { path: "/admin/dashboard", element: isAuthenticated ? (_jsx(DashboardPage, {})) : (_jsx(Navigate, { to: "/admin/login", replace: true })) }), _jsx(Route, { path: "/login", element: _jsx(AdminLogin, {}) }), _jsx(Route, { path: "/admin/login", element: _jsx(AdminLogin, {}) }), _jsx(Route, { path: "/register", element: _jsx(RegisterPage, {}) }), _jsx(Route, { path: "/admin/register", element: _jsx(RegisterPage, {}) }), _jsx(Route, { path: "/admin", element: isAuthenticated ? (_jsx(Navigate, { to: "/admin/dashboard", replace: true })) : (_jsx(Navigate, { to: "/admin/login", replace: true })) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }), _jsx(Footer, {}), _jsx(Scheduling, {})] }));
}
export default App;
