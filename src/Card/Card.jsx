import React from "react";
import './Card.css'

function Card({ tipo, titulo, descricao, autor, imagemSrc }) {
    return (
        <div className="card">
            <div className="card__left">
                <span>{tipo}</span>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <span>{autor}</span>
            </div>
            <div className="card__right">
                <img src={imagemSrc} alt="Imagem do card" />
            </div>
        </div>
    );
}

export default Card;
