const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export interface Post {
  _id: string;
  titulo: string;
  conteudo: string;
  slug: string;
  imagemCapa: string;
  tags: string[];
  status: string;
  autor: string;
  createdAt: string;
  updatedAt: string;
}

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Erro HTTP:", response.status, data);
      throw new Error(data.message || "Erro ao buscar posts");
    }

    console.log("✅ Posts recebidos:", data);
    return data;
  } catch (error: any) {
    console.error("❌ Erro ao buscar posts:", error.message);
    throw error;
  }
};
