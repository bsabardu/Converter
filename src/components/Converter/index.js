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
    };
  }

  handleToggleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
    // Je destructure mon state pour récupérer ce qui m'intéresse
    const currentCurrency = currenciesData[0];
    const baseAmount = 2;

    return (
      <div className="converter">
        <Header
          baseAmount={baseAmount}
          currenciesOpenState={open}
          onToggleClick={this.handleToggleClick}
        />
        {open && <Currencies currencies={currenciesData} />}
        <Result
          currencyName={currentCurrency.name}
          currencyRate={currentCurrency.rate * baseAmount}
        />
      </div>
    );
  }
}

// == Export
export default Converter;
