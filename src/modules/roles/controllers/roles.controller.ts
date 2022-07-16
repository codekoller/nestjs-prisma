import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { AddRoleDTO } from '@/modules/roles/dtos/add-role.dto';
import { AddRoleService } from '@/modules/roles/services/add/add-role.service';
import { FindRolesService } from '../services/find/find-roles.service';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('roles')
@ApiTags('roles')
export class RolesController {
  constructor(
    private readonly addRole: AddRoleService,
    private readonly findRoles: FindRolesService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'add role has been successfully created.',
  })
  @ApiConflictResponse({
    description: 'there is already a role with that name.',
  })
  async store(@Body() data: AddRoleDTO): Promise<Role> {
    return await this.addRole.add(data);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'return all roles.',
  })
  @ApiNotFoundResponse({
    description: 'no record found.',
  })
  async show(): Promise<Role[]> {
    return await this.findRoles.find();
  }
}
