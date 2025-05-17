import React from 'react';
import './styles.css';
import { imagens } from '../../../../assets/imagens';
import { FaRegFolderOpen } from "react-icons/fa6";

const ProfileViewProjects: React.FC = () => {
    return (
        <>
        <div className='projects-icon-section'>
            <FaRegFolderOpen className="projects-icon" />
            <h3>Projetos em Destaque</h3>
        </div>
            <div className="project-grid">
                <div className="projects-card">
                    <img src={imagens.arquiteto_projeto_residencial} alt="Residencial" />
                    <div className='projects-card-content'>
                        <h3>Residencial - Camaragibe - 2023</h3>
                        <p>Casa JM - Design de ambientes internos e externos com iluminação natural.</p>
                    </div>
                </div>
                <div className="projects-card">
                    <img src={imagens.arquiteto_projeto_interiores} alt="Interiores" />
                    <div className='projects-card-content'>
                        <h3>Interiores - Olinda - 2022</h3>
                        <p>Apartamento LZ - Sala de estar com iluminação indireta.</p>
                    </div>
                </div>
                <div className="projects-card">
                    <img src={imagens.arquiteto_projeto_comercial} alt="Comercial" />
                    <div className='projects-card-content'>
                        <h3>Comercial - Recife - 2021</h3>
                        <p>Espaço Colab - Reforma de espaço comercial para ambientes colaborativos e flexíveis.</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProfileViewProjects;