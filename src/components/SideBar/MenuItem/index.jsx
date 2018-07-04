import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import './styles.css';


const MenuItem = (props) => {
  const { location, path, title } = props;
  const { pathname } = location;

  const className = classNames('MenuItem', {
    'MenuItem-active': pathname === path,
  });

  return (
    <div key={path} className={className}>
      <i className="MenuItem-icon" />
      <Link to={path}>
        { title }
      </Link>
      <i className="MenuItem-arrow" />
    </div>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MenuItem);
