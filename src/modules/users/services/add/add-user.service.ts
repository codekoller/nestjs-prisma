import { ConflictException, Injectable } from '@nestjs/common';
import { user as User } from '@prisma/client';
import { AddUserDTO } from '@/modules/users/dtos/add-user.dto';
import { UsersRepository } from '@/modules/users/repositories/users.repository';
import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter/bcrypt-adapter';

@Injectable()
export class AddUserService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly bcryptAdapter: BcryptAdapter,
  ) {}
  async add(data: AddUserDTO): Promise<User> {
    const userFound = await this.usersRepo.findByEmail(data.email);

    if (userFound) {
      throw new ConflictException();
    }

    const newUser = {
      ...data,
      password: await this.bcryptAdapter.hash(data.password),
    };

    return await this.usersRepo.add(newUser);
  }
}
