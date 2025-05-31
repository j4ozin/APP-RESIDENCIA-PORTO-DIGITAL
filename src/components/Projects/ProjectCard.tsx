import React from "react";
import "./ProjectCard.css";
import { FaArchive, FaEye, FaPencilAlt, FaUser, FaExternalLinkAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { TbProgress } from "react-icons/tb";
import { RiProgress8Fill } from "react-icons/ri";
import { IoIosRemoveCircle } from "react-icons/io";

interface ProjectCardProps {
  projeto: {
    id: string;
    titulo: string;
    status: string;
    local: string;
    categoria: string;
    tipoServico: string;
    dataInicio: string;
    dataFim?: string;
    tempoEstimado?: string;
    autor: string;
    tags: string[];
    imagem: string;
    destaque: boolean;
  };
}

const ProjectCard: React.FC<{ projeto: ProjectCardProps["projeto"] }> = ({ projeto }) => {
  return (
    <div className="project-card">
      <div className="project-img-wrapper">
        <img src={projeto.imagem} alt={projeto.titulo} />
        <span className={`status-badge ${projeto.status.toLowerCase().replace(" ", "-")}`}>
          {projeto.status === "Em andamento" && <TbProgress className="status-icon" />}
          {projeto.status === "Concluído" && <RiProgress8Fill className="status-icon" />}
          {projeto.status === "Arquivado" && <IoIosRemoveCircle className="status-icon" />}
          {projeto.status}
        </span>
      </div>
      <div className="project-info">
        <div className="project-top-row">
          <h3>{projeto.titulo}</h3>
          <a href="#" className="briefing-link">
            <FaExternalLinkAlt className="briefing-icon" /> Briefing
          </a>
        </div>
        <div className="location">
          <FaLocationPin className="location-icon" />
          {projeto.local} • {projeto.categoria}
        </div>
        <div className="date-info">
          <span>{projeto.dataInicio} - {projeto.dataFim ? (
            <span>{projeto.dataFim}</span>
          ) : projeto.status === "Em andamento" && projeto.tempoEstimado ? (
            <span className="estimate-badge">{projeto.tempoEstimado} estimado</span>
          ) : null}</span>
          
        </div>
        <div className="author">
          <FaUser className="author-icon" />
          <span>{projeto.autor}</span>
        </div>
        <div className="tags">
          {projeto.tags.map((tag, i) => (
            <span key={i} className={`tag ${tag.toLowerCase()}`}>{tag}</span>
          ))}
        </div>
        <div className="action-icons">
          <div className="action-icon">
            <span className="icon-circle"><FaPencilAlt /></span>
            <span className="icon-label">Editar</span>
          </div>
          <div className="action-icon">
            <span className="icon-circle"><FaEye /></span>
            <span className="icon-label">Visualizar</span>
          </div>
          <div className="action-icon">
            <span className="icon-circle"><FaArchive /></span>
            <span className="icon-label">Arquivar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;