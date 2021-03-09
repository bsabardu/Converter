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
      search: '',
    };
  }

  componentDidMount() {
    this.updateTitle();
  }

  componentDidUpdate(prevProprs, prevState) {
    const { currentCurrency, open } = this.state;
    // Pour éviter de mettre à jour le nom si qq chose d'autre que open ou currentCurrency a changé on test
    if (prevState.open !== open || prevState.currentCurrency !== currentCurrency) {
      this.updateTitle();
    }
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

  handleSearchChange = (event) => {
    // On récupère la valeur réellee du champs avant imposition par la value
    const search = event.target.value;
    this.setState({
      search,
    });
  };

  handleAmountChange = (event) => {
    // On récupère la valeur réellee du champs avant imposition par la value
    const amount = event.target.value;
    this.setState({
      baseAmount: amount,
    });
  };

  updateTitle() {
    const { currentCurrency, open } = this.state;
    document.title = open ? currentCurrency.name : 'Converter';
  }

  render() {
    const {
      open,
      currentCurrency,
      baseAmount,
      search,
    } = this.state;
    // Je destructure mon state pour récupérer ce qui m'intéresse

    return (
      <div className="converter">
        <Header
          baseAmount={baseAmount}
          currenciesOpenState={open}
          onToggleClick={this.handleToggleClick}
          onAmountChange={this.handleAmountChange}
        />
        {open && (
          <Currencies
            currencies={currenciesData}
            handleCurrencySelect={this.handleCurrencySelect}
            selectedCurrency={currentCurrency}
            search={search}
            onSearchChange={this.handleSearchChange}
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
