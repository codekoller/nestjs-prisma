import {
  AddRoleRepository,
  FindRoleByNameRepository,
  FindRolesRepository,
} from '@/data/protocols/db/roles';
import { InstancePrisma } from '@/prisma/instance.prisma';
import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';

@Injectable()
export class RolesRepository
  implements AddRoleRepository, FindRoleByNameRepository, FindRolesRepository
{
  constructor(private readonly instancePrisma: InstancePrisma) {}

  async add(data: Prisma.RoleCreateInput): Promise<Role> {
    return await this.instancePrisma.role.create({
      data,
    });
  }

  async findByName(name: string): Promise<Role> {
    return await this.instancePrisma.role.findUnique({ where: { name } });
  }

  async find(): Promise<Role[]> {
    return await this.instancePrisma.role.findMany();
  }
}
