// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Currency = ({ name, onClick, selectedCurrency }) => (
  <li
    className={selectedCurrency.name === name ? 'currency currency--selected' : 'currency'}
    onClick={onClick}
  >{name}
  </li>
);

// On déclare le type de props attendu
Currency.propTypes = {
  selectedCurrency: PropTypes.object,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Currency.defaultProps = {
  selectedCurrency: {},
  onClick: () => {},
};

// == Export
export default Currency;
