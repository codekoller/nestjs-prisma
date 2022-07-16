import { Injectable, NotFoundException } from '@nestjs/common';
import { RolesRepository } from '@/modules/roles/repositories/roles.repository';
import { Role } from '@prisma/client';

@Injectable()
export class FindRolesService {
  constructor(private readonly rolesRepo: RolesRepository) {}

  async find(): Promise<Role[]> {
    const roles = await this.rolesRepo.find();

    if (!roles) {
      throw new NotFoundException('no record found');
    }

    return roles;
  }
}
