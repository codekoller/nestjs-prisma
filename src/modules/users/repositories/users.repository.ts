import { Injectable } from '@nestjs/common';
import { Prisma, user as User } from '@prisma/client';
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

  async add(data: Prisma.userCreateInput): Promise<User> {
    return this.instancePrisma.user.create({
      data,
    });
  }

  async findUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.userWhereUniqueInput;
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.instancePrisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findById(id: string): Promise<User> {
    return this.instancePrisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return this.instancePrisma.user.findUnique({ where: { email } });
  }
}
