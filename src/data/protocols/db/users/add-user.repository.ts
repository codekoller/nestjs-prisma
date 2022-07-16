import { Prisma, user as User } from '@prisma/client';

export interface AddUserRepository {
  add(data: Prisma.userCreateInput): Promise<User>;
}
