import React from "react";
import { FaTrash, FaEdit } from 'react-icons/fa';
import './Card.css';

function Card({ tipo, titulo, descricao, autor, imgSrc, onDelete, onUpdate }) {
  return (
    <div className="card">
      <div className="card__left">
      <span>{autor}</span>
        <span>{tipo}</span>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
      <div className="card__right">
        <img src={imgSrc} alt="Imagem do card" width={300} height={300} />
        <div className="icons">
          <FaEdit className="edit-icon" onClick={onUpdate} />
          <FaTrash className="delete-icon" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default Card;
