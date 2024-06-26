import { TutorProfileWhereInput } from "./TutorProfileWhereInput";
import { TutorProfileOrderByInput } from "./TutorProfileOrderByInput";

export type TutorProfileFindManyArgs = {
  where?: TutorProfileWhereInput;
  orderBy?: Array<TutorProfileOrderByInput>;
  skip?: number;
  take?: number;
};
