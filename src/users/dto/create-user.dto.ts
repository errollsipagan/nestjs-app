/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { User, UserRole } from '../../types';

export default class CreateUserDto implements Omit<User, 'id'> {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsEnum(UserRole, {
    message: 'Valid role requried',
  })
  role: UserRole;
}
