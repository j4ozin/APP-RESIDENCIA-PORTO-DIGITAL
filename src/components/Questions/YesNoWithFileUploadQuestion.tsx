import { useState, useEffect } from 'react';
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import './styles.css';

interface YesNoWithFileUploadProps {
  questionText: string;
  uploadLabel: string;
  followUp: string;
  answer: string | { tipo: string; file?: File };
  onChange: (value: string | { tipo: string; file?: File }) => void;
}

export default function YesNoWithFileUpload({ followUp, questionText, uploadLabel, answer, onChange }: YesNoWithFileUploadProps) {
  const [selected, setSelected] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [detail, setDetail] = useState('');

  useEffect(() => {
    if (typeof answer === 'object' && answer?.tipo === 'Sim') {
      setSelected('Sim');
      setDetail(answer.detalhe || '');
      setFile(answer.file || null);
    } else if (answer === 'Sim' || answer === 'Não') {
      setSelected(answer);
      setFile(null);
      setFile( null);
    }
  }, [answer]);

  const handleSelect = (opt: string) => {
    setSelected(opt);
    if (opt === 'Não') {
      setFile(null);
      onChange('Não');
    } else {
      onChange({ tipo: 'Sim' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    onChange({ tipo: 'Sim', file: selectedFile || undefined });
  };

const handleDetailChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setDetail(val);
    onChange({ tipo: 'Sim', detalhe: val });
  };

  return (
    <div className="multiple-choice-container">
      <h3>{questionText}</h3>
      <div className="multiple-choice-options">
        <button
          className={`choice-button ${selected === 'Sim' ? 'selected' : ''}`}
          onClick={() => handleSelect('Sim')}
        >
          <div className="icon"><BiSolidLike /></div>
          <div>Sim</div>
        </button>
        <button
          className={`choice-button ${selected === 'Não' ? 'selected' : ''}`}
          onClick={() => handleSelect('Não')}
        >
          <div className="icon"><BiSolidDislike /></div>
          <div>Não</div>
        </button>
      </div>
{selected === 'Sim' && (
        <div className="other-input-container">
          <textarea
            className="other-input"
            placeholder={followUp}
            value={detail}
            onChange={handleDetailChange}
          />
          <div className="file-upload-container">
          <label className="file-upload-label">
            {uploadLabel}
            <input
              type="file"
              className="file-input"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />
          </label>
          {file && <p className="file-name">Arquivo selecionado: {file.name}</p>}
        </div>
        </div>
        
      )}
    </div>
  );
}