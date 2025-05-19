import React from 'react';
import './styles.css';
import { MdHome } from "react-icons/md";
import Logo from '../../Logo';


const BriefingHeader: React.FC = () => {
  return (
    <>
      <header className='briefing-header-container'>
        <div className='briefing-header-left-col'>
          <Logo />
          <div className='blank'></div>
        </div>
        <div className="briefing-header-center-col">
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
        <div className="briefing-header-right-col"></div>
      </header>
    </>
  );
};


export default BriefingHeader;

