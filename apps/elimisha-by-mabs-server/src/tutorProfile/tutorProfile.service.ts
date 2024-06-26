import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TutorProfileServiceBase } from "./base/tutorProfile.service.base";

@Injectable()
export class TutorProfileService extends TutorProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
