import ICourse from "../models/course.model";
import { FAILURE, REQUEST, SUCCESS } from "./action-type.util";
import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_COURSES: 'course/FETCH_COURSES',
  RESET: 'courses/RESET'
};

const initialState = {
  courses: [] as ReadonlyArray<ICourse>,
  errorMessage: null,
  fetchSuccess: false
};

export type CoursesState = Readonly<typeof initialState>;

// Reducer

export default (state: CoursesState = initialState, action): CoursesState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COURSES):
      return {
        ...state,
        fetchSuccess: false
      };
    case SUCCESS(ACTION_TYPES.FETCH_COURSES):
      return {
        ...state,
        courses: action.payload.data.courses,
        fetchSuccess: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COURSES):
      return {
        ...state,
        errorMessage: action.payload,
        fetchSuccess: false
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

// Actions

export const fetchCourses = (token: string) => async (dispatch, _) => {
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_COURSES,
    payload: axios.get('https://classroom.googleapis.com/v1/courses', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  });
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
