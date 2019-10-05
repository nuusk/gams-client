import PropTypes from 'prop-types';

const CustomPropTypes = {};

CustomPropTypes.history = PropTypes.shape({
  push: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
});

export default CustomPropTypes;
