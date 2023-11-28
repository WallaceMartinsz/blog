import axios from "axios";

const postsAPI = axios.create({ baseURL: "http://localhost:3030/api" });

async function createPost(postData) {
  try {
    const response = await postsAPI.post("/posts", postData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar post:', error);
    throw error;
  }
}

async function getPosts() {
  try {
    const response = await postsAPI.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    throw error;
  }
}

async function getPostById(id) {
  try {
    const response = await postsAPI.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar post com ID ${id}:`, error);
    throw error;
  }
}

async function updatePost(id, postData) {
  try {
    const response = await postsAPI.put(`/posts/${id}`, postData);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar post com ID ${id}:`, error);
    throw error;
  }
}

async function deletePost(id) {
  try {
    const response = await postsAPI.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao excluir post com ID ${id}:`, error);
    throw error;
  }
}

export {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost
};
