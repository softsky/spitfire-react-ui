import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import './styles.css';


const SideBar = ({ items }) => (
  <div className="SideBar-container">
    <i className="SideBar-logo" />
    { items.map(item => <MenuItem {...item} key={item.path} />) }
    <div className="SideBar-footer">
      <p className="SideBar-footer-status">
        STATUS:
        {' '}
        <span>
Authenticated
        </span>
      </p>
      <p className="Sider-footer-updates">
        Check for updates
        {' '}
        <span className="SideBar-footer-faq">
FAQ
        </span>
      </p>
    </div>
  </div>
);

SideBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default SideBar;
