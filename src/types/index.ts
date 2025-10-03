export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole | string;
}

export enum UserRole {
  INTERN = 'INTERN',
  ENGINEER = 'ENGINEER',
  ADMIN = 'ADMIN',
}
