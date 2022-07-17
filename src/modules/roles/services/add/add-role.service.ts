import { FindUserByIdService } from '@/modules/users/services/find-by-id/find-user-by-id.service';
import { ConflictException, Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { AddRoleDTO } from '@/modules/roles/dtos/add-role.dto';
import { RolesRepository } from '@/modules/roles/repositories/roles.repository';

@Injectable()
export class AddRoleService {
  constructor(
    private readonly rolesRepo: RolesRepository,
    private readonly findUserById: FindUserByIdService,
  ) {}

  async add(data: AddRoleDTO): Promise<Role> {
    const { name, permissions, userId } = data;
    const role = await this.rolesRepo.findByName(name);
    const user = await this.findUserById.findById(userId);

    if (role) {
      throw new ConflictException();
    }

    return await this.rolesRepo.add({
      name,
      permissions,
      user: {
        connect: {
          id: user.id,
        },
      },
    });
  }
}
