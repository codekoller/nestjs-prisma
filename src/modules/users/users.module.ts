import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter/bcrypt-adapter';
import { PrismaModule } from '@/prisma/prisma.module';
import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersRepository } from './repositories/users.repository';
import { AddUserService } from './services/add/add-user.service';
import { FindUserByIdService } from './services/find-by-id/find-user-by-id.service';
import { FindUserByEmailService } from './services/find-email/find-user-by-email.service';
import { FindUserService } from './services/find/find-user.service';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  providers: [
    AddUserService,
    UsersRepository,
    BcryptAdapter,
    FindUserService,
    FindUserByIdService,
    FindUserByEmailService,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
