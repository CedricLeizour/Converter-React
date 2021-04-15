// == Import npm
import React, { Component } from 'react'

// == Import
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
    this.state = {
      open: false,
    };
  }

  handleToggleClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div className="converter">
        <Header baseAmount={1} />
        <Toggler open={open} handleOnClick={this.handleToggleClick} />
        { open && <Currencies currencies={currenciesData} />}
        <Amount currency="United States Dollar" value={1.094103} />
      </div>
    );
  }
}

// == Export
export default Converter;
