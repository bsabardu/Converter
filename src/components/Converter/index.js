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
const Converter = () => (
  <div className="converter">
    <Header />
    <Currencies currencies={currenciesData} />
    <Result />
  </div>
);

// == Export
export default Converter;
