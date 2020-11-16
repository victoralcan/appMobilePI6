export const ACTION_TYPES = {
  LOGIN: 'authentication/LOGIN',
  LOGOUT: 'authentication/LOGOUT',
  RESET: 'authentication/RESET'
};

const initialState = {
  isAuthenticated: false,
  userToken: null
};

export type AuthenticationState = Readonly<typeof initialState>;

// Reducer

export default (state: AuthenticationState = initialState, action): AuthenticationState => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        userToken: action.payload
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...initialState,
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export const setLoggedIn = (token: string) => async (dispatch, _) => {
  await dispatch({
    type: ACTION_TYPES.LOGIN,
    payload: token
  });
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
