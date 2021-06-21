// == Import npm
import React, { Component } from 'react';

// == Import
// Je récupère les données afin de les fournires à mes sous composants
import currenciesData from 'src/data/currencies';

// On importe les composants
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import Toggler from 'src/components/Toggler';

import './styles.scss';

// == Composant
class Converter extends Component {
  constructor(props) {
    super(props);
    // State représente l'état du composant, c'est un objet et il doit être immutable

    // Ici on le déclare dans le constructeur afin de l'initialiser à sa valeur initiale
    // C'est ce qu'on apelle l'initialState
    this.state = {
      open: false,
      baseAmount: 1,
      // eslint-disable-next-line react/no-unused-state
      currency: {
        name: 'Australian Dollar',
        rate: 1.665247,
      },
      search: '',
    };
  }

  setCurrency = (name, rate) => {
    // on déclenche un changement d'état du composant
    this.setState({
      currency: {
        name,
        rate,
      },
    });
  }

  handleToggleClick = () => {
    const { open } = this.state;
    // On utilise la méthode de classe setState
    this.setState({
      open: !open,
    });
  }

  handleSearchInputChange = (event) => {
    this.setState({ search: event.target.value });
  }

  getFilteredCurrencies = () => {
    const { search } = this.state;
// Si search n'est pas renseignée, on renvoie toutes les données directement
    if (search.trim() === '') {
      return currenciesData;
    }

    return currenciesData.filter((currency) => {
      // On récupère la valeur du nom de la monnaie sans espace
      let currencyName = currency.name.trim();
      currencyName = currencyName.toLowerCase();
      const currencyToSearch = search.trim().toLowerCase();
      // pour finir on va voir si ce qu'on cherche est inclus dans chacunes des noms des monnaies
      return currencyName.includes(currencyToSearch);
    });
  }

  render() {
    const { open, baseAmount, currency, search } = this.state;
    const filteredCurrencies = this.getFilteredCurrencies();
    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler open={open} handleOnClick={this.handleToggleClick} />
        {
          open && (
            <Currencies
              selectedCurrencyName={currency.name}
              search={search}
              onSearch={this.handleSearchInputChange}
              setCurrency={this.setCurrency}
              currencies={filteredCurrencies}
            />
          )
        }
        <Amount
          currency={currency.name}
          value={currency.rate * baseAmount}
        />
      </div>
    );
  }
}

// == Export
export default Converter;
