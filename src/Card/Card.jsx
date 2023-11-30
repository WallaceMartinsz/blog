import React, { useState } from "react";
import { FaTrash, FaEdit } from 'react-icons/fa';
import ModalUpdatePost from '../ModalUpdate/ModalUpdatePost'
import './Card.css';

function Card({ postId, tipo, titulo, descricao, autor, img, onDelete, onUpdate }) {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const openUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  return (
    <>
      <div className="card">
        <div className="card__left">
          <span>{autor}</span>
          <span>{tipo}</span>
          <h1>{titulo}</h1>
          <p>{descricao}</p>
        </div>
        <div className="card__right">
          <img src={img} alt="Imagem do card" width={300} height={300} />
          <div className="icons">
            <FaEdit className="edit-icon" onClick={openUpdateModal} />
            <FaTrash className="delete-icon" onClick={onDelete} />
          </div>
        </div>
      </div>
      {isUpdateModalOpen && (
        <ModalUpdatePost
          postId={postId}
          onClose={closeUpdateModal}
          onUpdate={onUpdate}
        />
      )}
    </>


  );
}

export default Card;
