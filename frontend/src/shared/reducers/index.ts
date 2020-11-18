import { combineReducers } from 'redux';
import authentication, { AuthenticationReducerState } from "./authentication";
import courses, { CourseReducerState } from "./course.reducer";
import announcement, { AnnouncementReducerState } from './announcement.reducer';
import courseWork, { CourseWorkReducerState } from "./courseWork.reducer";

export interface IRootState {
  readonly authentication: AuthenticationReducerState,
  readonly courses: CourseReducerState
  readonly announcement: AnnouncementReducerState
  readonly courseWork: CourseWorkReducerState
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  courses,
  announcement,
  courseWork
});

export default rootReducer;
