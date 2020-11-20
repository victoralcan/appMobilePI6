import ICourse, { CourseState, Student, UserProfile } from "../models/course.model";
import { FAILURE, REQUEST, SUCCESS } from "./action-type.util";
import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_COURSES: 'course/FETCH_COURSES',
  SELECT_COURSE: 'course/SELECT_COURSE',
  FETCH_STUDENTS: 'course/FETCH_STUDENTS',
  USER_INFO: 'course/USER_INFO',
  RESET: 'courses/RESET'
};

const initialState = {
  courses: [] as ReadonlyArray<ICourse>,
  selectedCourse: {} as Readonly<ICourse>,
  students: [] as ReadonlyArray<Student>,
  userInfo: {} as UserProfile,
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
    case SUCCESS(ACTION_TYPES.USER_INFO):
      return {
        ...state,
        userInfo: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_STUDENTS):
      return {
        ...state,
        students: action.payload.data.students
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

export const fetchStudents = (token: string, courseId?: string) => async (dispatch, _) => {
  const requestUrl = `https://classroom.googleapis.com/v1/courses/${courseId}/students`;
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_STUDENTS,
    payload: axios.get(requestUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  });
};

export const getUserById = (token: string, id: string) => async (dispatch, _) => {
  const requestUrl = `https://classroom.googleapis.com/v1/userProfiles/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.USER_INFO,
    payload: axios.get(requestUrl, {
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
