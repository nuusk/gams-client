import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProfile } from '../actions/profileActions';

class PlayerContainer extends Component {
  componentDidMount() {
    const { onFetchProfile } = this.props;

    onFetchProfile();
  }

  renderAvatar() {
    const { error, loading, profile } = this.props;

    if (error) {
      return (
        <div>
          Error loading avatar!
          {' '}
          {error.message}
        </div>
      );
    }

    if (loading) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <img src={profile.imgURL} alt="Player Avatar" />
    );
  }

  render() {
    return this.renderAvatar();
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
  loading: state.profile.loading,
  error: state.profile.error,
});

const mapDispatchToPtops = dispatch => ({
  onFetchProfile: () => dispatch(fetchProfile()),
});

export default connect(mapStateToProps, mapDispatchToPtops)(PlayerContainer);

PlayerContainer.propTypes = {
  onFetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.string,
  error: PropTypes.bool,
  loading: PropTypes.bool,
};

PlayerContainer.defaultProps = {
  profile: '',
  error: false,
  loading: false,
};
