import React from 'react';
import './styles.css';
import { FaBell } from 'react-icons/fa';

const ProfileEditPreferences: React.FC = () => {
    return (
        <>
        <div className="notification-header">
          <FaBell className="notification-icon" />
          <h3>Preferências de Notificação</h3>
        </div>
        <div className="notification-options">
          <label className="checkbox-option">
            <div><input type="checkbox" /></div> Notificações por e-mail
          </label>
          <label className="checkbox-option">
            <div><input type="checkbox" /></div> Notificações na plataforma
          </label>
          <label className="checkbox-option">
            <div><input type="checkbox" /></div> Newsletter e novidades
          </label>
        </div>
        </>
    );
};

export default ProfileEditPreferences;