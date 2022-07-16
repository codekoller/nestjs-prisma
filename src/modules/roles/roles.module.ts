import { PrismaModule } from '@/prisma/prisma.module';
import { forwardRef, Module } from '@nestjs/common';
import { UsersRepository } from '../users/repositories/users.repository';
import { FindUserByIdService } from '../users/services/find-by-id/find-user-by-id.service';
import { RolesController } from './controllers/roles.controller';
import { RolesRepository } from './repositories/roles.repository';
import { AddRoleService } from './services/add/add-role.service';
import { FindRolesService } from './services/find/find-roles.service';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  providers: [
    AddRoleService,
    RolesRepository,
    FindUserByIdService,
    UsersRepository,
    FindRolesService,
  ],
  controllers: [RolesController],
})
export class RolesModule {}
