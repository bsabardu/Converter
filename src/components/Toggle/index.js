import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Toggle = ({ activated, onToggleClick }) => {
  const toggleClassname = activated
    ? 'toggle toggle--activated'
    : 'toggle';

  return (
    <button
      type="button"
      className={toggleClassname}
      onClick={onToggleClick}
    >
      =
    </button>
  );
};

Toggle.propTypes = {
  activated: PropTypes.bool,
  onToggleClick: PropTypes.func,
};

Toggle.defaultProps = {
  activated: false,
  onToggleClick: () => {},
};

export default Toggle;
