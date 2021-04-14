// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

// == Composant
const Currency = ({ name }) => (
  <li>{name}</li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};
// == Export
export default Currency;
