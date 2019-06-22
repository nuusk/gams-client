import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectGame, fetchGames } from '../actions/gamesActions';

class GameList extends Component {
  componentDidMount() {
    const { onFetchGames } = this.props;

    onFetchGames();
  }

  renderList() {
    const {
      error, loading, games, onSelectGame,
    } = this.props;

    if (error) {
      return (
        <div>
          Error!
          {' '}
          {error.message}
        </div>
      );
    }

    if (loading) {
      return (
        <div>
          loading...
        </div>
      );
    }

    return (
      games
      && (
        <div>
          {games.map(game => (
            <h1
              // eslint-disable-next-line no-underscore-dangle
              key={game._id}
            // eslint-disable-next-line no-underscore-dangle
            // gameID={game._id}
            // handleClick={onSelectGame}
            >
              {game.title}
            </h1>
          ))}
        </div>
      )
    );
  }

  render() {
    return this.renderList();
  }
}

const mapStateToProps = state => ({
  games: state.games.items,
  loading: state.games.loading,
  error: state.games.error,
});

const mapDispatchToProps = dispatch => ({
  onSelectGame: challengeID => dispatch(selectGame(challengeID)),
  onFetchGames: () => dispatch(fetchGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameList);

GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onFetchGames: PropTypes.func.isRequired,
  onSelectGame: PropTypes.func.isRequired,
  error: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
};

GameList.defaultProps = {
  error: null,
};
