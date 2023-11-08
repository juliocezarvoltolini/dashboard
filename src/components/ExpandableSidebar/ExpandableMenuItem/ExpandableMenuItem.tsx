// src/ExpandableMenuItem.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './ExpandableMenuItem.css';

interface ExpandableMenuItemProps {
  icon: any;
  description: string;
  url: string;
  expanded: boolean;
}

const ExpandableMenuItem: React.FC<ExpandableMenuItemProps> = ({
  icon,
  description,
  url,
  expanded,
}) => {
  return (
    <li className={`menu-item ${expanded ? 'expanded' : ''}`}>
      <Link to={url} className="menu-link">
        <span className="icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        {expanded && <span className="description">{description}</span>}
      </Link>
    </li>
  );
};

export default ExpandableMenuItem;
