import styled from 'styled-components';
import PropTypes from 'prop-types';

const ExpBar = styled.progress`

`;

ExpBar.propTypes = {
  percentage: PropTypes.number,
};

ExpBar.defaultProps = {
  percentage: 0,
};

export default ExpBar;
