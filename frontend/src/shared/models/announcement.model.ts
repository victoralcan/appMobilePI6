import { CourseMaterial } from './course.model';

export default interface IAnnouncement {
  courseId: string,
  id: string,
  text: string,
  materials: CourseMaterial[],
  state: AnnouncementState,
  alternateLink: string,
  creationTime: string,
  updateTime: string,
  scheduledTime?: string,
  assigneeMode: AssigneeMode,
  individualStudentsOptions: IndividualStudentsOptions,
  creatorUserId: string
}

export enum AnnouncementState {
  ANNOUNCEMENT_STATE_UNSPECIFIED,
  PUBLISHED,
  DRAFT,
  DELETED
}

export enum AssigneeMode {
  ASSIGNEE_MODE_UNSPECIFIED,
  ALL_STUDENTS,
  INDIVIDUAL_STUDENTS
}

export interface IndividualStudentsOptions {
  studentIds: string[]
}
