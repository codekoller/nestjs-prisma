import { user as User } from '@prisma/client';

export interface FindUsersRepository {
  findUsers(): Promise<User[]>;
}
