// == Import npm
import React, { Component } from 'react';

// == Import
import './styles.scss';

// == Components
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

// == Data

import currenciesData from 'src/data/currencies';

// == Composant
class Converter extends Component {
  // On initialise le composant
  constructor(props) {
    // On appelle le constructeur du parent grâce à la fonction super
    super(props);
    // Puis on déclare le state avec son état initial même vide.

    this.state = {
      open: true,
      currentCurrency: currenciesData[0],
      baseAmount: 2,
    };
  }

  handleToggleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleCurrencySelect = (currency) => {
    this.setState({
      currentCurrency: currency,
    });
  };

  render() {
    const { open, currentCurrency, baseAmount } = this.state;
    // Je destructure mon state pour récupérer ce qui m'intéresse


    return (
      <div className="converter">
        <Header
          baseAmount={baseAmount}
          currenciesOpenState={open}
          onToggleClick={this.handleToggleClick}
        />
        {open && (
          <Currencies
            currencies={currenciesData}
            handleCurrencySelect={this.handleCurrencySelect}
            selectedCurrency={currentCurrency}
          />
        )}
        <Result
          currencyName={currentCurrency.name}
          currencyResult={currentCurrency.rate * baseAmount}
        />
      </div>
    );
  }
}

// == Export
export default Converter;
