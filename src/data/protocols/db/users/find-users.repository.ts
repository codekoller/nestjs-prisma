import { User } from '@prisma/client';

export interface FindUsersRepository {
  findUsers(): Promise<User[]>;
}
