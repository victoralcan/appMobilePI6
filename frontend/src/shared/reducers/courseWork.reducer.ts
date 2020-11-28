import { FAILURE, REQUEST, SUCCESS } from "./action-type.util";
import axios from 'axios';
import ICourseWork from "../models/courseWork.model";

export const ACTION_TYPES = {
  FETCH_COURSE_WORKS: 'courseWork/FETCH_COURSE_WORKS',
  RESET: 'courseWork/RESET'
};

const initialState = {
  courseWorks: [] as ReadonlyArray<ICourseWork>,
  errorMessage: null,
  fetchCourseWorksSuccess: false
};

export type CourseWorkReducerState = Readonly<typeof initialState>;

// Reducer

export default (state: CourseWorkReducerState = initialState, action): CourseWorkReducerState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COURSE_WORKS):
      return {
        ...state,
        fetchCourseWorksSuccess: false
      };
    case SUCCESS(ACTION_TYPES.FETCH_COURSE_WORKS):
      return {
        ...state,
        courseWorks: action.payload.data.courseWork,
        fetchCourseWorksSuccess: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COURSE_WORKS):
      return {
        ...state,
        errorMessage: action.payload,
        fetchCourseWorksSuccess: false
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

export const fetchCourseWorks = (token: string, courseId: string) => async (dispatch, _) => {
  const requestUrl = `https://classroom.googleapis.com/v1/courses/${courseId}/courseWork`;
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_COURSE_WORKS,
    payload: axios.get(requestUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  });
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
