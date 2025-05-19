import { FaExclamationCircle, FaRegSave, FaRegTrashAlt } from 'react-icons/fa';
import './styles.css';

interface SaveButtonProps {
  loading: boolean;
  salvo: boolean;
  error?: string | null; // Nova prop para erros
  onSave: () => void;
}

export const SaveButton: React.FC<SaveButtonProps> = ({ loading, salvo, error, onSave }) => {
  const handleDeleteAccount = () => {
    alert('Conta excluída.');
  };

  const handleChangePassword = () => {
    alert('Redirecionar para alteração de senha.');
  };

  return (
    <div className="profile-form-actions-container">
      <div className="profile-form-actions">
        <button type="button" className="profile-button password" onClick={handleChangePassword}>
          <FaExclamationCircle size={16} className="edit-profile-icon" />
          <div>Alterar Senha</div>
        </button>

        <button type="button" className="profile-button save" disabled={loading} onClick={onSave}>
          <FaRegSave size={16} className="edit-profile-icon" />
          <div>{loading ? 'Salvando...' : 'Salvar'}</div>
        </button>

        <button type="button" className="profile-button delete" onClick={handleDeleteAccount}>
          <FaRegTrashAlt size={16} className="edit-profile-icon" />
          <div>Excluir Conta</div>
        </button>
      </div>
      {salvo && <div className="save-confirmation">Dados salvos com sucesso!</div>}
      {error && <div className="error-message">Erro: {error}</div>}
    </div>
  );
};