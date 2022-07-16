import { Role } from '@prisma/client';

export interface FindRolesRepository {
  find(): Promise<Role[]>;
}
