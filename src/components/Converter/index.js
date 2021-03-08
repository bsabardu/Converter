// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Components
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

// == Data

import currenciesData from 'src/data/currencies';

// == Composant
const Converter = () => {
  const currentCurrency = currenciesData[0];
  const baseAmount = 1;

  return (
    <div className="converter">
      <Header baseAmount={baseAmount} />
      <Currencies currencies={currenciesData} />
      <Result
        currencyName={currentCurrency.name}
        currencyRate={currentCurrency.rate * baseAmount}
      />
    </div>
  );
};

// == Export
export default Converter;
