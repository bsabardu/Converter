// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'src/components/Toggle';

// == Import
import './styles.scss';

// == Composant
const Result = ({ currencyName, currencyResult }) => (
  <div className="result">
    {
      (currencyResult !== null)
    && <h1 className="result__number">{ currencyResult.toFixed(2) }</h1>
    }
    {
      currencyName
    && <h2 className="result__currency">{ currencyName }</h2>
    }
  </div>
);

Result.propTypes = {
  currencyName: PropTypes.string,
  currencyResult: PropTypes.number,
};

Result.defaultProps = {
  currencyName: '',
  currencyResult: null,
};

// == Export
export default Result;
