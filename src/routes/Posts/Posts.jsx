import React, { useState, useEffect } from 'react';
import { getPosts, deletePost, updatePost } from '../../services/PostService';
import Card from '../../Card/Card';
import './Posts.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    const updatedPosts = posts.filter((post) => post._id !== id);
    setPosts(updatedPosts);
  };

  const handleUpdate = async (id, updatedData) => {
    await updatePost(id, updatedData);
  };

  const filteredPosts = posts.filter((post) =>
    post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.conteudo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        className='search-bar'
        type="text"
        placeholder="Pesquisar post..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="posts-container">
        {filteredPosts.map((post) => (
          <Card
            key={post._id}
            postId={post._id}
            tipo={post.assunto}
            titulo={post.titulo}
            descricao={post.conteudo}
            autor={post.autor}
            img={post.img}
            onDelete={() => handleDelete(post._id)}
            onUpdate={() => handleUpdate(post._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;
