import { CourseMaterial, DriveFolder } from './course.model';
import { AssigneeMode, IndividualStudentsOptions } from './announcement.model';

export default interface ICourseWork {
  courseId: string,
  id: string,
  title: string,
  description?: string,
  materials: CourseMaterial[],
  state: CourseWorkState,
  alternateLink: string,
  creationTime: string,
  updateTime: string,
  dueDate?: Date,
  dueTime?: TimeOfDay,
  scheduledTime?: string,
  maxPoints?: number,
  workType: CourseWorkType,
  associatedWithDeveloper: boolean,
  assigneeMode: AssigneeMode,
  individualStudentsOptions: IndividualStudentsOptions,
  submissionModificationMode: SubmissionModificationMode,
  creatorUserId: string,
  topicId: string,
  assignment: Assignment,
  multipleChoiceQuestion: MultipleChoiceQuestion
}

export interface Date {
  year: number,
  month: number,
  day: number
}

export interface TimeOfDay {
  hours: number,
  minutes: number,
  seconds: number,
  nanos: number
}

export enum CourseWorkState {
  COURSE_WORK_STATE_UNSPECIFIED,
  PUBLISHED,
  DRAFT,
  DELETED
}

export enum CourseWorkType {
  COURSE_WORK_TYPE_UNSPECIFIED,
  ASSIGNMENT,
  SHORT_ANSWER_QUESTION,
  MULTIPLE_CHOICE_QUESTION
}

export enum SubmissionModificationMode {
  SUBMISSION_MODIFICATION_MODE_UNSPECIFIED,
  MODIFIABLE_UNTIL_TURNED_IN,
  MODIFIABLE,
}

export interface Assignment {
  studentWorkFolder: DriveFolder
}

export interface MultipleChoiceQuestion {
  choices: string[]
}

