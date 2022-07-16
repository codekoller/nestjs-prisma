import { Prisma, Role } from '@prisma/client';

export interface AddRoleRepository {
  add(data: Prisma.RoleCreateInput): Promise<Role>;
}
