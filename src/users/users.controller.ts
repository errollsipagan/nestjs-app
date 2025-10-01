import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //users?name
  getAll(@Query('name') name?: string) {
    console.log({
      name,
    });
    return [];
  }
  @Get(':id') //users/:id
  getById(@Param('id') id: string) {
    return { id };
  }
  @Post()
  create(@Body() user: object) {
    return user;
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() user: object) {
    return { id, ...user };
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return id;
  }
}
