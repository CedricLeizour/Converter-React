// == Import npm
import React from 'react'

// == Import
import currenciesData from 'src/data/currencies';

// On importe les composants
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import './styles.scss';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header baseAmount={1} />
    <Currencies currencies={currenciesData}/>
    <Amount />
  </div>
);

// == Export
export default Converter;
