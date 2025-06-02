import React, { useEffect, useState } from 'react';
import './styles.css';
import { FaBuilding, FaRegEdit, FaHome, FaRegCalendarAlt, FaRegTrashAlt, FaRegCommentAlt, FaHistory, FaStore } from 'react-icons/fa';
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaLocationPin } from 'react-icons/fa6';
import { FiArchive } from 'react-icons/fi';
import { projectsCliente } from '../../../../data/projectsCliente';

type Project = {
  id: string;
  titulo: string;
  local: string;
  categoria: string;
  tipoServico: string;
  dataInicio: string;
  dataFim?: string;
  status: string;
  destaque: boolean;
  messages: number;
  comments: number;
  applause: number;
  completion: number | null;
};

const ProfileEditProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Simulate fetching from local storage
    const storedProjects = projectsCliente;
    // Sort by dataInicio (most recent first) and take top 2
    const sortedProjects = storedProjects
      .sort((a, b) => {
        const dateA = new Date(a.dataInicio);
        const dateB = new Date(b.dataInicio);
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, 2)
      .map(project => ({
        ...project,
        // Random values for missing fields
        messages: Math.floor(Math.random() * 10) + 1,
        comments: Math.floor(Math.random() * 5) + 1,
        applause: Math.floor(Math.random() * 10) + 1,
        // If status is "Em andamento", mark as "Rascunho" with random percentage
        status: project.status === "Em andamento" ? "Rascunho" : project.status,
        completion: project.status === "Em andamento" ? Math.floor(Math.random() * 100) + 1 : null,
        dataFim: project.dataFim ?? undefined,
      }));
    
    console.log('Sorted Projects:', sortedProjects); // Debug log to verify sorted projects
    setProjects(sortedProjects);
  }, []);

  const getIcon = (categoria: string) => {
    if (categoria === "Residencial") {
      return <FaHome className="edit-projects-title" />;
    } else if (categoria === "Comercial") {
      return <FaStore className="edit-projects-title" />;
    } else {
      return <FaBuilding className="edit-projects-title" />;
    }
  };

  return (
    <>
      <div className="edit-projects-header">
        <HiMiniSquare3Stack3D className="edit-projects-icon" />
        <h3>Últimos Projetos</h3>
      </div>
      <div className="edit-projects-grid">
        {projects.map(project => (
          <div className="edit-projects-card" key={project.id}>
            <div className='edit-projects-info'>
              <div className="edit-projects-info-icon">
                <div>{getIcon(project.categoria)}</div>
                <div className='edit-projects-title'><h3>{project.titulo}</h3></div>
              </div>
              <div className='edit-projects-info-status'>
                <span className={`edit-projects-status status-${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
            </div>
            <div className='edit-projects-info-details'>
              <FaRegCalendarAlt />
              <div>Iniciado em {project.dataInicio}</div>
              <div> • </div>
              <FaLocationPin />
              <div>{project.local}</div>
            </div>
            <div className="edit-projects-actions">
              <button type="button" className={`profile-button ${project.status === "Rascunho" ? "continue" : "history"}`}>
                {project.status === "Rascunho" ? (
                  <>
                    <FaRegEdit size="16" className="edit-profile-icon" />
                    <div>{project.completion}% • Continuar</div>
                  </>
                ) : (
                  <>
                    <FaHistory size="16" className="edit-profile-icon" />
                    <div>Histórico</div>
                  </>
                )}
              </button>
              <button type="button" className={`profile-button ${project.status === "Concluído" ? "archive" : "cancel"}`}>
                {project.status === "Concluído" ? (
                  <>
                    <FiArchive size="16" className="edit-profile-icon" />
                    <div>Arquivar</div>
                  </>
                ) : (
                  <>
                    <FaRegTrashAlt size="16" className="edit-profile-icon" />
                    <div>Cancelar</div>
                  </>
                )}
              </button>
            </div>
            <div className="edit-projects-activity">
              <FaRegCommentAlt />
              <div>{project.messages} mensagens</div>
              <div> • </div>
              <div>{project.comments} comentário{project.comments !== 1 ? 's' : ''}</div>
              <div> • </div>
              <div>{project.applause} aplauso{project.applause !== 1 ? 's' : ''}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileEditProjects;