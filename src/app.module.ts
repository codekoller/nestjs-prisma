import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [forwardRef(() => UsersModule)],
  controllers: [],
  providers: [],
})
export class AppModule {}
