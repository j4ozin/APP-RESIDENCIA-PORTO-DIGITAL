import React from 'react';
import './styles.css';
import { FaBuilding, FaRegEdit, FaHome, FaRegCalendarAlt, FaRegTrashAlt, FaRegCommentAlt, FaHistory } from 'react-icons/fa';
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaLocationPin } from 'react-icons/fa6';


const ProfileEditProjects: React.FC = () => {
    return (
        <>
            <div className="edit-projects-header">
                <HiMiniSquare3Stack3D className="edit-projects-icon" />
                <h3>Meus Projetos</h3>
            </div>
            <div className="edit-projects-grid">
                <div className="edit-projects-card">
                    <div className='edit-projects-info'>
                        <div className="edit-projects-info-icon">
                            <div className='edit-projects-info'>
                                <FaHome className="edit-projects-title" />
                            </div>
                            <div className='edit-projects-title'><h3>Casa do Zero</h3></div>
                        </div>
                        <div className='edit-projects-info-status'>
                            <span className="edit-projects-status status-rascunho">Rascunho</span>
                        </div>
                    </div>
                    <div className='edit-projects-info-details'>
                        <FaRegCalendarAlt />
                        <div>Iniciado em 10/05/2024</div>
                        <div> • </div>
                        <FaLocationPin />
                        <div>Recife</div>
                    </div>
                    <div className="edit-projects-actions">
                        
                        <button type="button" className="profile-button continue">
                            <FaRegEdit size="16" className="edit-profile-icon" />
                            <div>
                                46% • Continuar
                            </div>
                        </button>
                        <button type="button" className="profile-button cancel" >
                            <FaRegTrashAlt size="16" className="edit-profile-icon" />
                            <div>
                                Cancelar
                            </div>
                        </button>
                    </div>
                    <div className="edit-projects-activity">
                        <FaRegCommentAlt />
                        <div>2 mensagens</div>
                        <div> • </div>
                        <div>1 comentário</div>
                    </div>
                </div>
                <div className="edit-projects-card">
                    <div className='edit-projects-info'>
                        <div className="edit-projects-info-icon">
                            <div>
                                <FaBuilding className="edit-projects-icon edit-projects-icon-project" />
                            </div>
                            <h3>Reforma Total</h3>
                        </div>
                        <div className='edit-projects-info-status'>
                            <span className="edit-projects-status status-approved">Aprovado</span>
                        </div>
                    </div>
                    <div className='edit-projects-info-details'>
                        <FaRegCalendarAlt />
                        <div>Iniciado em 23/03/2024</div>
                        <div> • </div>
                        <FaLocationPin />
                        <div>Jaboatão dos Guararapes</div>
                    </div>
                    <div className="edit-projects-actions">
                        <button type="button" className="profile-button continue">
                            <FaHistory size="16" className="edit-profile-icon" />
                            <div>
                                Histórico
                            </div>
                        </button>
                        <button type="button" className="profile-button cancel" >
                            <FaRegTrashAlt size="16" className="edit-profile-icon" />
                            <div>
                                Cancelar
                            </div>
                        </button>
                    </div>
                    <div className="edit-projects-activity">
                        <FaRegCommentAlt />
                        <div>4 mensagens</div>
                        <div> • </div>
                        <div>3 comentário</div>
                        <div> • </div>
                        <div>2 aplausos</div>
                    </div>
                </div>
                

            </div>

        </>
    );
};

export default ProfileEditProjects;