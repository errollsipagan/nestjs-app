/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { isEnum } from 'class-validator';
import { User, UserRole } from 'src/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      role: 'ADMIN',
    },
  ];
  getAll(role?: string) {
    if (!isEnum(role, UserRole)) {
      throw new BadRequestException('Invalid role ' + role);
    }
    if (role) {
      const users = this.users.filter((user) => user.role === role);
      if (!users.length) {
        throw new NotFoundException('No users found with role ' + role);
      }
      return users;
    }
    return this.users;
  }
  getById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  getIndex(id: number) {
    return this.users.findIndex((user) => user.id === id);
  }
  create(user: Omit<User, 'id'>) {
    const id = this.users.at(this.users.length - 1)!.id + 1;
    const newUser = { id, ...user };
    this.users.push(newUser);
    return newUser;
  }
  update(id: number, user: Partial<User>) {
    const old = this.getById(id);
    const index = this.getIndex(id);
    const updated = {
      ...old,
      ...user,
    };
    this.users[index] = updated;
    return updated;
  }
  delete(id: number) {
    const index = this.getIndex(id);
    const removed = this.users.splice(index, 1)[0];
    return removed;
  }
}
