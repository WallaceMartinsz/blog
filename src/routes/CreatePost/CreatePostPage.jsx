import React, { useState } from 'react';
import { createPost } from '../../services/PostService';
import './CreatePostPage.css';

const CreatePostPage = () => {
  const [autor, setAutor] = useState('');
  const [assunto, setAssunto] = useState('');
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [img, setImagem] = useState(null);

  const [formValidation, setFormValidation] = useState({
    autor: false,
    assunto: false,
    titulo: false,
    conteudo: false,
    img: false,
  });

  const handleInputFocus = (field) => {
    setFormValidation({
      ...formValidation,
      [field]: false,
    });
  };

  const handleSubmit = async () => {
    const newFormValidation = {
      autor: !autor,
      assunto: !assunto,
      titulo: !titulo,
      conteudo: !conteudo,
      img: !img,
    };

    setFormValidation(newFormValidation);

    if (Object.values(newFormValidation).some((invalid) => invalid)) {
      return;
    }

    setAutor('');
    setAssunto('');
    setTitulo('');
    setConteudo('');
    setImagem(null);

    const postData = {
      autor,
      assunto,
      titulo,
      conteudo,
      img,
    };

    try {
      await createPost(postData);
      alert('Post enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar post:', error);
    }
  };

  return (
    <div className="create-post-page">
      <h2>Criar post</h2>
      <div className="form">
        <div className={`input-container ${formValidation.autor ? 'invalid-field' : ''}`}>
          <label className="label">Autor</label>
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            onFocus={() => handleInputFocus('autor')}
          />
        </div>
        <div className={`input-container ${formValidation.assunto ? 'invalid-field' : ''}`}>
          <label className="label">Assunto</label>
          <input
            type="text"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
            onFocus={() => handleInputFocus('assunto')}
          />
        </div>
        <div className={`input-container ${formValidation.titulo ? 'invalid-field' : ''}`}>
          <label className="label">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            onFocus={() => handleInputFocus('titulo')}
          />
        </div>
        <div className={`input-container ${formValidation.conteudo ? 'invalid-field' : ''}`}>
          <label className="label">Conteúdo</label>
          <textarea
            cols="30"
            rows="10"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            onFocus={() => handleInputFocus('conteudo')}
          ></textarea>
        </div>
        <div className={`input-container ${formValidation.imagem ? 'invalid-field' : ''}`}>
          <label className="label">Imagem</label>
          <input
            type="text"
            id="imagemInput"
            placeholder="URL da Imagem"
            value={img}
            onChange={(e) => setImagem(e.target.value)}
            onFocus={() => handleInputFocus('img')}
          />
        </div>

        <button className="button" onClick={handleSubmit}>
          Enviar post!
        </button>
      </div>
    </div>
  );
};

export default CreatePostPage;
