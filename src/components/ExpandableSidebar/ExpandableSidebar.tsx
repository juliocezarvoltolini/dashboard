// src/ExpandableSidebar.tsx
import React, { useState } from 'react';
import { faBars, faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExpandableMenuItem from './ExpandableMenuItem/ExpandableMenuItem';
import './ExpandableSidebar.css';

const ExpandableSidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expandable-sidebar ${expanded ? 'expanded' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul>
        <ExpandableMenuItem
          icon={faHome}
          description="Início"
          url="/home"
          expanded={expanded}
        />
        <ExpandableMenuItem
          icon={faUser}
          description="Perfil"
          url="/profile"
          expanded={expanded}
        />
        <ExpandableMenuItem
          icon={faCog}
          description="Configurações"
          url="/settings"
          expanded={expanded}
        />
      </ul>
    </div>
  );
};

export default ExpandableSidebar;
