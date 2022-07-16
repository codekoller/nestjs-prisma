import { forwardRef, Module } from '@nestjs/common';
import { RolesModule } from './modules/roles/roles.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [forwardRef(() => UsersModule), forwardRef(() => RolesModule)],
  controllers: [],
  providers: [],
})
export class AppModule {}
