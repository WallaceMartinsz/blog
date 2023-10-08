import React, { useState } from 'react';
import './Modal.css'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [autor, setAutor] = useState('');
    const [assunto, setAssunto] = useState('');
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [imagem, setImagem] = useState(null);

    const [formValidation, setFormValidation] = useState({
        autor: false,
        assunto: false,
        titulo: false,
        conteudo: false,
        imagem: false,
    });

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleInputFocus = (field) => {
        setFormValidation({
            ...formValidation,
            [field]: false,
        });
    };

    const handleSubmit = () => {
        const newFormValidation = {
            autor: !autor,
            assunto: !assunto,
            titulo: !titulo,
            conteudo: !conteudo,
            imagem: !imagem,
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

        closeModal();
    };

    return (
        <div>
            <button className="button" onClick={openModal}>Criar post</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
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
                                    type="file"
                                    id="imagemInput"
                                    accept="image/*"
                                    onChange={(e) => setImagem(e.target.files[0])}
                                    onFocus={() => handleInputFocus('imagem')}
                                />
                            </div>
                            <button className="button" onClick={handleSubmit}>Enviar post!</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
