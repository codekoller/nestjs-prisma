import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { InstancePrisma } from '@/prisma/instance.prisma';
import {
  AddUserRepository,
  FindUserByIdRepository,
  FindUsersRepository,
  FindUserByEmailRepository,
} from '@/data/protocols/db/users';

@Injectable()
export class UsersRepository
  implements
    AddUserRepository,
    FindUsersRepository,
    FindUserByIdRepository,
    FindUserByEmailRepository
{
  constructor(private readonly instancePrisma: InstancePrisma) {}

  async add(data: Prisma.UserCreateInput): Promise<User> {
    return await this.instancePrisma.user.create({
      data,
    });
  }

  async findUsers(): Promise<User[]> {
    return await this.instancePrisma.user.findMany({
      include: {
        roles: true,
      },
    });
  }

  async findById(id: string): Promise<User> {
    return await this.instancePrisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.instancePrisma.user.findUnique({ where: { email } });
  }
}
