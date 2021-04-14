// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Currency from './Currency';

// == Composant
const Currencies = ({ currencies }) => (
  <div className="currencies">
    <h2>Currencies</h2>
    <ul>
      {currencies.map((currency) => (
        <Currency
          key={currency.name}
          name={currency.name}
        />
      ))}
    </ul>
  </div>
);

Currencies.PropTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Currencies;
