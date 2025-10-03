import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type { UserRole } from 'src/types';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserDto from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() //users?role
  getAll(@Query('role') role?: UserRole) {
    return this.usersService.getAll(role);
  }
  @Get(':id') //users/:id
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getById(id);
  }
  @Post()
  create(@Body(ValidationPipe) user: CreateUserDto) {
    return this.usersService.create(user);
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) user: UpdateUserDto,
  ) {
    return this.usersService.update(id, user);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
