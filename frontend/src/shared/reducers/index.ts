import { combineReducers } from 'redux';
import authentication, { AuthenticationState } from "./authentication";
import courses, { CoursesState } from "./course.reducer";

export interface IRootState {
  readonly authentication: AuthenticationState,
  readonly courses: CoursesState
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  courses
});

export default rootReducer;
