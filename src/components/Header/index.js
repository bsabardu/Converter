// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import Components
import Toggle from 'src/components/Toggle';

// == Import
import './styles.scss';

// == Composant
const Header = ({ baseAmount, currenciesOpenState, onToggleClick, onAmountChange }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <h2 className="header__subtitle"><input className="header__amount-input" onChange={onAmountChange} value={baseAmount} />{baseAmount > 1 ? 'euros' : 'euro' }</h2>
    <Toggle activated={currenciesOpenState} onToggleClick={onToggleClick} />
  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number,
  currenciesOpenState: PropTypes.bool,
  onToggleClick: PropTypes.func,
};

Header.defaultProps = {
  baseAmount: 1,
  currenciesOpenState: false,
  onToggleClick: () => {},

};

// == Export
export default Header;
