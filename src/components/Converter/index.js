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
      currentCurrency: {
        name: 'Australian Dollar',
        rate: 1.665247,
      },
    };
  }


  handleToggleClick = () => {
    const { open } = this.state;
    // On utilise la méthode de classe setState
    this.setState({
      open: !open,
    });
  }

  render() {
    const { open, baseAmount, currentCurrency } = this.state;
    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Toggler open={open} handleOnClick={this.handleToggleClick} />
        { open && <Currencies currencies={currenciesData} />}
        <Amount
          currency={currentCurrency.name}
          value={currentCurrency.rate * baseAmount}
        />
      </div>
    );
  }
}

// == Export
export default Converter;
