// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Result = ({ currencyName, currencyRate }) => (
  <div className="result">
    {
      (currencyRate !== null)
    && <h1 className="result__number">{ currencyRate.toFixed(2) }</h1>
    }
    {
      currencyName
    && <h2 className="result__currency">{ currencyName }</h2>
    }
  </div>
);

Result.propTypes = {
  currencyName: PropTypes.string,
  currencyRate: PropTypes.number,
};

Result.defaultProps = {
  currencyName: '',
  currencyRate: null,
};

// == Export
export default Result;
