import { CourseWorkType } from './courseWork.model';
import { CourseMaterial } from './course.model';

export default interface IStudentSubmission {
  courseId: string,
  courseWorkId: string,
  id: string,
  userId: string,
  creationTime: string,
  updateTime: string,
  state: SubmissionState,
  late: boolean,
  draftGrade?: number,
  assignedGrade?: number,
  alternateLink: string,
  courseWorkType: CourseWorkType,
  associatedWithDeveloper: boolean,
  submissionHistory: SubmissionHistory[],
  assignmentSubmission: AssignmentSubmission,
  shortAnswerSubmission: ShortAnswerSubmission,
  multipleChoiceSubmission: MultipleChoiceSubmission
}

export enum SubmissionState {
  SUBMISSION_STATE_UNSPECIFIED,
  NEW,
  CREATED,
  TURNED_IN,
  RETURNED,
  RECLAIMED_BY_STUDENT
}

export interface SubmissionHistory {
  stateHistory: StateHistory,
  gradeHistory: GradeHistory
}

export interface StateHistory {
  state: State,
  stateTimestamp: string,
  actorUserId: string
}

export interface GradeHistory {
  stateHistory: StateHistory,
  gradeHistory: GradeHistory
}

export enum State {
  STATE_UNSPECIFIED,
  CREATED,
  TURNED_IN,
  RETURNED,
  RECLAIMED_BY_STUDENT,
  STUDENT_EDITED_AFTER_TURN_IN
}

export interface AssignmentSubmission {
  attachments: CourseMaterial[]
}

export interface ShortAnswerSubmission {
  answer: string
}

export interface MultipleChoiceSubmission {
  answer: string
}


