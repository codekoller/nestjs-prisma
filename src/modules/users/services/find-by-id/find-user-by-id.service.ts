import { Injectable, NotFoundException } from '@nestjs/common';
import { user as User } from '@prisma/client';
import { UsersRepository } from '@/modules/users/repositories/users.repository';

@Injectable()
export class FindUserByIdService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async findById(id: string): Promise<User> {
    const user = await this.usersRepo.findById(id);

    if (!user) {
      throw new NotFoundException('user not found.');
    }

    return user;
  }
}
