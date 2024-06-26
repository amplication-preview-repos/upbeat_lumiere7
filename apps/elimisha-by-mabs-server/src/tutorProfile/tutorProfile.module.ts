import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TutorProfileModuleBase } from "./base/tutorProfile.module.base";
import { TutorProfileService } from "./tutorProfile.service";
import { TutorProfileController } from "./tutorProfile.controller";
import { TutorProfileResolver } from "./tutorProfile.resolver";

@Module({
  imports: [TutorProfileModuleBase, forwardRef(() => AuthModule)],
  controllers: [TutorProfileController],
  providers: [TutorProfileService, TutorProfileResolver],
  exports: [TutorProfileService],
})
export class TutorProfileModule {}
