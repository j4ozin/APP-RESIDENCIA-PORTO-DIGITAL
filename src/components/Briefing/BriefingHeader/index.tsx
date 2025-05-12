import React from 'react';
import './styles.css';
import { MdHome } from "react-icons/md";


const BriefingHeader: React.FC = () => {
  return (
    <header className='briefing-header'>
      <div className="briefing-header">
        <div className='simple-left-col'>Briffa</div>
        <div className="simple-center-col">
          <div className="rounded-frame">
          <div className="selected-briefing">
            <span>
              Briefing selecionado:
            </span>
          </div>
          <div className="briefing-type">
          <MdHome size='20' />
            <span>
              CASA DO ZERO
            </span>
          </div>
          </div>
        </div>
        <div className="simple-right-col"></div>
      </div>
    </header>
  );
};


export default BriefingHeader;

