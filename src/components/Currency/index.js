// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Currency = ({ name, onClick, activated }) => (
  <li
    className={activated ? 'currency currency--selected' : 'currency'}
    onClick={onClick}
  >{name}
  </li>
);

// On déclare le type de props attendu
Currency.propTypes = {
  activated: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Currency.defaultProps = {
  activated: false,
  onClick: () => {},
};

// == Export
export default Currency;
