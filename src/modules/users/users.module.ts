import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter/bcrypt-adapter';
import { PrismaModule } from '@/prisma/prisma.module';
import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersRepository } from './repositories/users.repository';
import { AddUserService } from './services/add/add-user.service';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  providers: [AddUserService, UsersRepository, BcryptAdapter],
  controllers: [UsersController],
})
export class UsersModule {}
