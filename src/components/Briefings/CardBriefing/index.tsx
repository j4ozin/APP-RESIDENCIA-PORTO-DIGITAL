import React from "react";
import "./styles.css";
import { BriefingData } from "../../../data/briefings";
import { Link } from "react-router-dom";
import { FaClock, FaStar } from "react-icons/fa";
import { GoListOrdered } from "react-icons/go";

export const BriefingCard: React.FC<{ briefing: BriefingData }> = ({
  briefing,
}) => {
  return (
    <div className="listar-briefing-card-container">
      <div className={`list-briefing-card ${briefing.categoria.toLowerCase()}`}>
        <div className="list-briefing-header">
          <span className="categoria">{briefing.categoria}</span>
          {briefing.tags?.includes("Novo") && (
            <span className="tag novo">Novo</span>
          )}
          {briefing.tags?.includes("Popular") && (
            <span className="tag popular">Popular</span>
          )}
        </div>
        <h3>{briefing.titulo}</h3>
        <p>{briefing.descricao}</p>
        <div className="info">
          <span className="info-tempo">
            <FaClock /> {briefing.tempo}
          </span>
          <span className="info-nivel">
            <FaStar /> {briefing.nivel}
          </span>
          <span className="info-perguntas">
            <GoListOrdered  /> {briefing.perguntas} perguntas
          </span>
        </div>

        <Link
          to={briefing.link}
          aria-label={`Começar o briefing ${briefing.titulo}`}
          onClick={() => console.log("Clicou no link:", briefing.link)}
        >
          <button className="botao">Começar</button>
        </Link>
      </div>
    </div>
  );
};