import { User } from './user.entity';

export class UserRepository {
  private users: User[] = [];

  findById(userId: string): User {
    return this.users.find(user => user.id === userId);
  }

  // Métodos adicionales para manejar usuarios
}