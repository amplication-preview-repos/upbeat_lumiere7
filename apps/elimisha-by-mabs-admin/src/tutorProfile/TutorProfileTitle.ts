import { TutorProfile as TTutorProfile } from "../api/tutorProfile/TutorProfile";

export const TUTORPROFILE_TITLE_FIELD = "id";

export const TutorProfileTitle = (record: TTutorProfile): string => {
  return record.id?.toString() || String(record.id);
};
