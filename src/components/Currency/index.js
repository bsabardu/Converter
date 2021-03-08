// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Currency = ({ name, handleCurrencySelect, selectedCurrency }) => (
  <li
    className={selectedCurrency === name ? 'currency currency--selected' : 'currency'}
    onClick={() => handleCurrencySelect(name)}
  >{name}
  </li>
);

// On déclare le type de props attendu
Currency.propTypes = {
  selectedCurrency: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleCurrencySelect: PropTypes.func,
};

Currency.defaultProps = {
  selectedCurrency: '',
  handleCurrencySelect: () => {},
};

// == Export
export default Currency;
