// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Currency = ({ name }) => (
  <li className="currency">{name}</li>
);

// On déclare le type de props attendu
Currency.propTypes = {
  name: PropTypes.string.isRequired,
};

// == Export
export default Currency;
