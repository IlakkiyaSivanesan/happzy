import React from 'react';
import LOGO from '../../utils/image (1).png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO} alt="Logo" />
        <span>HOPPZY</span>
      </div>
      <ul>
        
        <Link className="text" to={'/tariff'}>
          <li>Tariff</li>
        </Link>
        <Link className="text" to={'/careers'}>
          <li>Careers</li>
        </Link>
        <Link className="text" to={'/partnerwithus'}>
          <li>Partner with us</li>
        </Link>
      </ul>
      <div className="right-section">
        <div className="location">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>Pondicherry</span>
        </div>
        <div className="profile">
          <Link className="text" to={'/login'}>
            <FontAwesomeIcon icon={faUser} className="icon" />
            
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;