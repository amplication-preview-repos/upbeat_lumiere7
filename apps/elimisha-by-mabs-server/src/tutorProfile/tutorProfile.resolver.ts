import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TutorProfileResolverBase } from "./base/tutorProfile.resolver.base";
import { TutorProfile } from "./base/TutorProfile";
import { TutorProfileService } from "./tutorProfile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TutorProfile)
export class TutorProfileResolver extends TutorProfileResolverBase {
  constructor(
    protected readonly service: TutorProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
