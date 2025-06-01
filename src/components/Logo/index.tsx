import React from 'react';
import './styles.css';
import { FaCube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to ="/">
      <div className='logo'>
      <div className='logo-icon'>
        <FaCube size="2rem"/>
      </div>
      <div className='logo-title'>
        Briffa
      </div>
    </div>
    </Link>
    )
}

export default Logo;
