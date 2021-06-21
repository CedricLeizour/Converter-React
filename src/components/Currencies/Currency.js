// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

// == Composant
const Currency = ({ name, rate, setCurrency, selected }) => (
  <li 
    className={(selected) ? 'currency currency--active' : 'currency'}
    onClick={()=> {
      setCurrency(name, rate);
    }}
  >
    {name}
  </li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  setCurrency: PropTypes.func,
  selected: PropTypes.bool,
};

Currency.defaultProps = {
  setCurrency: () => { },
  selected: false,
};

// == Export
export default Currency;
