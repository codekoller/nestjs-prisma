import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { AddUserDTO } from '@/modules/users/dtos/add-user.dto';
import { AddUserService } from '@/modules/users/services/add/add-user.service';
import { FindUserService } from '@/modules/users/services/find/find-user.service';
import { FindUserByIdService } from '@/modules/users/services/find-by-id/find-user-by-id.service';
import { FindUserByEmailService } from '../services/find-email/find-user-by-email.service';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(
    private readonly addUser: AddUserService,
    private readonly findUsers: FindUserService,
    private readonly findUserById: FindUserByIdService,
    private readonly findUserByEmail: FindUserByEmailService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'add user has been successfully created.',
  })
  @ApiConflictResponse({
    description: 'there is already a user with that name.',
  })
  async store(@Body() data: AddUserDTO): Promise<User> {
    return await this.addUser.add(data);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'return all users.',
  })
  @ApiNotFoundResponse({
    description: 'no record found.',
  })
  async index(): Promise<User[]> {
    return await this.findUsers.find();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'return user by id.',
  })
  @ApiNotFoundResponse({
    description: 'user not found.',
  })
  async show(@Param('id') id: string): Promise<User> {
    return await this.findUserById.findById(id);
  }

  @Get(':email/show-email')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'return user by email.',
  })
  @ApiNotFoundResponse({
    description: 'user not found.',
  })
  async showEmail(@Param('email') email: string): Promise<User> {
    return await this.findUserByEmail.findByEmail(email);
  }
}
