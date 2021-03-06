import { User } from '@prisma/client';

export interface FindUserByIdRepository {
  findById(id: string): Promise<User>;
}
