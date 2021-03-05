// == Import npm
import React from 'react';
import PropTypes from 'prop-types';


// Sub components
import Currency from 'src/components/Currency';

// == Import
import './styles.scss';

// == Composant
const Currencies = ({ currencies }) => (
  <div className="currencies">
    <ul className="currencies_list">
      <li className="currency">Currency</li>
      {currencies.map((currency) => <Currency key={currency.name + currency.rate} {...currency} />)}
    </ul>
  </div>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
};

Currencies.defaultProps = {
  currencies: [],

};

// == Export
export default Currencies;
