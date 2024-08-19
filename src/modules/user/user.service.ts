import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getUserById(userId: string): User {
    return this.userRepository.findById(userId);
  }

  // Métodos adicionales para gestionar usuarios
}