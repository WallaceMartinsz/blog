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
    
        console.log('Dados do formulário:', { autor, assunto, titulo, conteudo, imagem });
    
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
                            <div className="input-container">
                                <label className="label">Autor</label>
                                <input
                                    type="text"
                                    value={autor}
                                    onChange={(e) => setAutor(e.target.value)}
                                    className={formValidation.autor ? 'invalid-field' : ''}
                                />
                            </div>
                            <div className="input-container">
                                <label className="label">Assunto</label>
                                <input
                                    type="text"
                                    value={assunto}
                                    onChange={(e) => setAssunto(e.target.value)}
                                    className={formValidation.assunto ? 'invalid-field' : ''}
                                />
                            </div>
                            <div className="input-container">
                                <label className="label">Título</label>
                                <input
                                    type="text"
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                    className={formValidation.titulo ? 'invalid-field' : ''}
                                />
                            </div>
                            <div className="input-container">
                                <label className="label">Conteúdo</label>
                                <textarea
                                    cols="30"
                                    rows="10"
                                    value={conteudo}
                                    onChange={(e) => setConteudo(e.target.value)}
                                    className={formValidation.conteudo ? 'invalid-field' : ''}
                                ></textarea>
                            </div>
                            <div className="input-container">
                                <label className="label">Imagem</label>
                                <input
                                    type="file"
                                    id="imagemInput"
                                    accept="image/*"
                                    onChange={(e) => setImagem(e.target.files[0])}
                                    className={formValidation.imagem ? 'invalid-field' : ''}
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
