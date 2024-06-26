import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TutorProfileService } from "./tutorProfile.service";
import { TutorProfileControllerBase } from "./base/tutorProfile.controller.base";

@swagger.ApiTags("tutorProfiles")
@common.Controller("tutorProfiles")
export class TutorProfileController extends TutorProfileControllerBase {
  constructor(
    protected readonly service: TutorProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
