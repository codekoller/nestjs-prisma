import { Role } from '@prisma/client';

export interface FindRoleByNameRepository {
  findByName(name: string): Promise<Role>;
}
