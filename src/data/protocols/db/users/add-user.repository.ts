import { Prisma, User } from '@prisma/client';

export interface AddUserRepository {
  add(data: Prisma.UserCreateInput): Promise<User>;
}
