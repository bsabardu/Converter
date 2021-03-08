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
      <li className="currency currency--title">Currency</li>

      {currencies.length ? (
        currencies.map((currency) => <Currency key={currency.name} {...currency} />)
      ) : (
        <h2>Pas de données à afficher</h2>
      )}
    </ul>
  </div>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

Currencies.defaultProps = {
  currencies: [],

};

// == Export
export default Currencies;
