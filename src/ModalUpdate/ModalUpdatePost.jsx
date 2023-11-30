import React, { useState, useEffect } from 'react';
import { getPostById, updatePost } from '../services/PostService';

const ModalUpdatePost = ({ postId, onClose, onUpdate }) => {
  const [autor, setAutor] = useState('');
  const [assunto, setAssunto] = useState('');
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [img, setImagem] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostById(postId);
        setAutor(postData.autor);
        setAssunto(postData.assunto);
        setTitulo(postData.titulo);
        setConteudo(postData.conteudo);
        setImagem(postData.img);
      } catch (error) {
        console.error('Erro ao buscar post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleUpdate = async () => {
    const updatedData = {
      autor,
      assunto,
      titulo,
      conteudo,
      img,
    };

    try {
      await updatePost(postId, updatedData);
      onUpdate(updatedData);
      onClose();
    } catch (error) {
      console.error('Erro ao atualizar post:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Atualizar post</h2>
        <div className="form">
          <div className="input-container">
            <label className="label">Autor</label>
            <input
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label className="label">Assunto</label>
            <input
              type="text"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label className="label">Título</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label className="label">Conteúdo</label>
            <textarea
              cols="30"
              rows="10"
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
            ></textarea>
          </div>
          <div className="input-container">
            <label className="label">Imagem</label>
            <input
              type="text"
              value={img}
              onChange={(e) => setImagem(e.target.value)}
            />
          </div>
          
          <button className="button" onClick={handleUpdate}>Atualizar post</button>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdatePost;
