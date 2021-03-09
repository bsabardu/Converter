// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Sub components
import Currency from 'src/components/Currency';

// == Import
import './styles.scss';

// == Composant
const Currencies = ({ currencies, handleCurrencySelect, selectedCurrency }) => (
  <div className="currencies">
    <ul className="currencies_list">
      <li className="currency currency--title">Currency</li>

      {currencies.length ? (
        currencies.map((currency) => (
          <Currency
            key={currency.name}
            onClick={() => {
              handleCurrencySelect(currency);
            }}
            selectedCurrency={selectedCurrency}
            {...currency}
          />
        ))
      ) : (
        <h2>Pas de données à afficher</h2>
      )}
    </ul>
  </div>
);

Currencies.propTypes = {
  selectedCurrency: PropTypes.string,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
  handleCurrencySelect: PropTypes.func,
};

Currencies.defaultProps = {
  selectedCurrency: '',
  currencies: [],
  handleCurrencySelect: () => {},

};

// == Export
export default Currencies;
