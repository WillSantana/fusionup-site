import api from "../api/axios";

export const postService = {
  // Listar posts
  async getPosts(params = {}) {
    try {
      const response = await api.get("/posts/", { params });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: "Erro ao carregar posts" };
    }
  },

  // Obter post por slug
  async getPost(slug) {
    try {
      const response = await api.get(`/posts/${slug}/`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: "Post não encontrado" };
    }
  },

  // Criar post
  async createPost(postData) {
    try {
      const response = await api.post("/posts/", postData);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        errors: error.response?.data?.errors || {},
      };
    }
  },

  // Atualizar post
  async updatePost(slug, postData) {
    try {
      const response = await api.put(`/posts/${slug}/`, postData);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        errors: error.response?.data?.errors || {},
      };
    }
  },

  // Deletar post
  async deletePost(slug) {
    try {
      await api.delete(`/posts/${slug}/`);
      return { success: true };
    } catch (error) {
      return { success: false, message: "Erro ao deletar post" };
    }
  },

  // Meus posts
  async getMyPosts() {
    try {
      const response = await api.get("/posts/my_posts/");
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: "Erro ao carregar seus posts" };
    }
  },

  // Alternar publicação
  async togglePublish(slug) {
    try {
      const response = await api.post(`/posts/${slug}/toggle_publish/`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: "Erro ao alterar publicação" };
    }
  },
};

