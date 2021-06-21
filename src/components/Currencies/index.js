// == Import npm
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// == Import
import Currency from './Currency';
import './style.scss';

// == Composant

class Currencies extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('Currencies Constructor');
  }

  componentDidMount() {
    this.changePageTitle();
  }

  componentDidUpdate() {
    this.changePageTitle();
  }

  componentWillUnmount() {
    this.changePageTitle('Converter');
  }

  changePageTitle = (title = null) => {
    const { selectedCurrencyName } = this.props;
    document.title = title || (`${selectedCurrencyName} - Converter`)
  }

  render() {
    const {
      currencies,
      search,
      onSearch,
      setCurrency,
      selectedCurrencyName,
    } = this.props;

    console.log('Currencies render');

    return (
      <div className="currencies">
        <input
          className="currencies__search"
          type="text"
          value={search}
          placeholder="Filtrer les devises"
          onChange={onSearch}
        />
        <ul className="currencies__list">
          {currencies.map((currency) => (
            <Currency
              key={currency.name}
              name={currency.name}
              rate={currency.rate}
              setCurrency={setCurrency}
              selected={currency.name === selectedCurrencyName}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }),
  ).isRequired,
  search: PropTypes.string,
  onSearch: PropTypes.func,
  setCurrency: PropTypes.func,
  selectedCurrencyName: PropTypes.string,
};

Currencies.defaultProps = {
  setCurrency: () => { },
  onSearch: () => { },
  search: '',
  selectedCurrencyName: null,
};

// == Export
export default Currencies;
