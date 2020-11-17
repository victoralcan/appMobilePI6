export default interface ICourse {
  id: string,
  name: string,
  section: string,
  descriptionHeading?: string,
  description?: string,
  room?: string,
  ownerId: string,
  creationTime: string,
  updateTime: string,
  enrollmentCode: string,
  courseState: CourseState,
  alternateLink: string,
  teacherGroupEmail: string,
  courseGroupEmail: string,
  teacherFolder: DriveFolder,
  courseMaterialSets: CourseMaterialSet[],
  guardiansEnabled: boolean,
  calendarId: string
}

export enum CourseState {
  COURSE_STATE_UNSPECIFIED,
  ACTIVE,
  ARCHIVED,
  PROVISIONED,
  DECLINED,
  SUSPENDED
}

export interface CourseMaterialSet {
  title: string,
  materials: CourseMaterial[]
}

export interface CourseMaterial {
  driveFile: DriveFile,
  youTubeVideo: YouTubeVideo,
  link: ILink,
  form: Form
}

export interface DriveFile {
  id: string,
  title: string,
  alternateLink: string,
  thumbnailUrl: string
}

export interface YouTubeVideo {
  id: string,
  title: string,
  alternateLink: string,
  thumbnailUrl: string
}

export interface ILink {
  url: string,
  title: string,
  thumbnailUrl: string
}

export interface Form {
  formUrl: string,
  responseUrl: string,
  title: string,
  thumbnailUrl: string
}

export interface DriveFolder {
  id: string,
  title: string,
  alternateLink: string
}
