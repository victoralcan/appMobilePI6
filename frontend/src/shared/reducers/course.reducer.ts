import ICourse, { CourseState } from "../models/course.model";
import { FAILURE, REQUEST, SUCCESS } from "./action-type.util";
import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_COURSES: 'course/FETCH_COURSES',
  SELECT_COURSE: 'course/SELECT_COURSE',
  RESET: 'courses/RESET'
};

const initialState = {
  courses: [] as ReadonlyArray<ICourse>,
  selectedCourse: {} as Readonly<ICourse>,
  errorMessage: null,
  fetchSuccess: false
};

export type CourseReducerState = Readonly<typeof initialState>;

// Reducer

export default (state: CourseReducerState = initialState, action): CourseReducerState => {
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
    case ACTION_TYPES.SELECT_COURSE:
      return {
        ...state,
        selectedCourse: action.payload
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

export const fetchCourses = (token: string, courseState?: CourseState) => async (dispatch, _) => {
  const requestUrl = 'https://classroom.googleapis.com/v1/courses?';
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_COURSES,
    payload: axios.get(requestUrl + (courseState ? 'courseStates=' + courseState : ''), {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  });
};

export const selectCourse = (course: ICourse) => ({
  type: ACTION_TYPES.SELECT_COURSE,
  payload: course
});

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
