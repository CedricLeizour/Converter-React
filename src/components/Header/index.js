// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const Header = ({baseAmount}) => (
  <div className="header">
    <h1 className="header__title">Converter</h1>
    <p className="header__amount">{baseAmount}</p>
  </div>
);

Header.propTypes = {
  baseAmount: PropTypes.number,
};

Header.defaultProps = {
  baseAmount: 1,
};

// == Export
export default Header
