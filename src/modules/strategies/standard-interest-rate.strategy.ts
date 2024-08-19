import { Injectable } from '@nestjs/common';
import { InterestRateStrategy } from './interest-rate.strategy';
import { User } from '../user/user.entity';

@Injectable()
export class StandardInterestRateStrategy implements InterestRateStrategy {
  calculate(user: User): number {
    return user.creditScore > 700 ? 5 : 15;
  }
}