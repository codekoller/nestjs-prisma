import { Injectable, NotFoundException } from '@nestjs/common';
import { user as User } from '@prisma/client';
import { UsersRepository } from '@/modules/users/repositories/users.repository';

@Injectable()
export class FindUserService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async find(): Promise<User[]> {
    const users = await this.usersRepo.findUsers();

    if (!users) {
      throw new NotFoundException('no record found.');
    }

    return users;
  }
}
