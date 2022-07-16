import { User } from '@prisma/client';

export interface FindUserByEmailRepository {
  findByEmail(email: string): Promise<User>;
}
