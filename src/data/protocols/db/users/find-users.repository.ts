import { Prisma, user as User } from '@prisma/client';

export interface FindUsersRepository {
  findUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.userWhereUniqueInput;
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithRelationInput;
  }): Promise<User[]>;
}
