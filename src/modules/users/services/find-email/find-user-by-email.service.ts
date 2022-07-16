import { Injectable, NotFoundException } from '@nestjs/common';
import { user as User } from '@prisma/client';
import { UsersRepository } from '@/modules/users/repositories/users.repository';

@Injectable()
export class FindUserByEmailService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepo.findByEmail(email);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    return user;
  }
}
