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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() //users?role
  getAll(@Query('role') role?: User['role']) {
    return this.usersService.getAll(role);
  }
  @Get(':id') //users/:id
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getById(id);
  }
  @Post()
  create(@Body() user: object) {
    return this.usersService.create(user as User);
  }
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() user: object) {
    return this.usersService.update(id, user as User);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
