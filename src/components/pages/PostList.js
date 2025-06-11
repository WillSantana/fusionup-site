import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
// Update the import path below if your postService file is in a different location
import { getPosts } from "../../services/postService";
export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPosts();
                setPosts(data);
            }
            catch (err) {
                setErro(err.message || "Erro ao buscar posts");
            }
            finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);
    if (loading)
        return _jsx("p", { children: "\uD83D\uDD04 Carregando posts..." });
    if (erro)
        return _jsxs("p", { className: "text-red-500", children: ["\u274C ", erro] });
    if (posts.length === 0)
        return _jsx("p", { children: "Nenhum post encontrado." });
    return (_jsx("div", { className: "grid gap-4", children: posts.map((post) => (_jsxs("div", { className: "p-4 border rounded shadow", children: [_jsx("h2", { className: "text-xl font-bold", children: post.titulo }), _jsxs("p", { children: [post.conteudo.substring(0, 100), "..."] })] }, post._id))) }));
}
