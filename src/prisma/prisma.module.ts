import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InstancePrisma } from '@/prisma/instance.prisma';

@Module({
  imports: [ConfigModule],
  providers: [InstancePrisma],
  exports: [InstancePrisma],
})
export class PrismaModule {}
