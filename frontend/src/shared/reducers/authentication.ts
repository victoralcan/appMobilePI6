import { User } from "@react-native-community/google-signin";

export const ACTION_TYPES = {
  LOGIN: 'authentication/LOGIN',
  LOGOUT: 'authentication/LOGOUT',
  RESET: 'authentication/RESET'
};

const initialState = {
  isAuthenticated: false,
  userToken: '',
  user: {} as User
};

export type AuthenticationReducerState = Readonly<typeof initialState>;

// Reducer

export default (state: AuthenticationReducerState = initialState, action): AuthenticationReducerState => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        userToken: action.payload.token,
        user: action.payload.user
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

export const setLoggedIn = (token: string, user: User) => async (dispatch, _) => {
  await dispatch({
    type: ACTION_TYPES.LOGIN,
    payload: { token, user }
  });
};

export const setLoggedOut = () => ({
  type: ACTION_TYPES.LOGOUT
});

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
