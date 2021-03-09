// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Sub components
import Currency from 'src/components/Currency';

// == Import
import './styles.scss';

import { searchItem } from 'src/selector';

// == Composant
const Currencies = ({
  currencies,
  handleCurrencySelect,
  selectedCurrency,
  search,
  onSearchChange,
}) => {
  const filteredCurrencies = searchItem(currencies, search);

  return (
    <div className="currencies">
      <input type="text" className="currencies__filter-input" placeholder="Currencies" value={search} onChange={onSearchChange} />
      <ul className="currencies_list">

        {filteredCurrencies.length ? (
          filteredCurrencies.map((currency) => (
            <Currency
              key={currency.name}
              onClick={() => {
                handleCurrencySelect(currency);
              }}
              activated={selectedCurrency && (selectedCurrency.name === currency.name)}
              {...currency}
            />
          ))
        ) : (
          <h2>Pas de données à afficher</h2>
        )}
      </ul>
    </div>
  );
};

Currencies.propTypes = {
  selectedCurrency: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
  handleCurrencySelect: PropTypes.func,
  onSearchChange: PropTypes.func,
  activated: PropTypes.bool,
  search: PropTypes.string,
};

Currencies.defaultProps = {
  selectedCurrency: {},
  currencies: [],
  handleCurrencySelect: () => {},
  onSearchChange: () => {},
  activated: false,
  search: '',

};

// == Export
export default Currencies;
