import React from 'react';
import './styles.css';
import { FaRegFolderOpen } from "react-icons/fa6";
import { projectsProfissional } from '../../../../data/projectsProfissional'; 

const ProfileViewProjects: React.FC = () => {
    const projetosConcluidos = projectsProfissional
        .filter(projeto => projeto.status === "Concluído")
        .sort((a, b) => {
            const dataA = new Date(a.dataFim ?? "1900-01-01").getTime();
            const dataB = new Date(b.dataFim ?? "1900-01-01").getTime();
            return dataB - dataA;
        })
        .slice(0, 3);

    return (
        <>
            <div className='projects-icon-section'>
                <FaRegFolderOpen className="projects-icon" />
                <h3>Projetos em Destaque</h3>
            </div>
            <div className="project-grid">
                {projetosConcluidos.map((projeto) => (
                    <div key={projeto.id} className="projects-card">
                        <img src={projeto.imagem} alt={projeto.categoria} />
                        <div className='projects-card-content'>
                            <h3>{`${projeto.categoria} - ${projeto.local}`}</h3>
                            <p>{projeto.titulo} - {projeto.tipoServico}.</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProfileViewProjects;
