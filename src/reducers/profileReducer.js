import {
  FETCH_PROFILE_BEGIN,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
} from '../actions/profileActions';

const initialProfile = {
  profile: {},
  loading: false,
  error: null,
};

// eslint-disable-next-line import/prefer-default-export
export const profile = (state = initialProfile, action) => {
  switch (action.type) {
    case FETCH_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
