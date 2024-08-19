import { Injectable } from '@nestjs/common';
import { InterestRateStrategy } from './interest-rate.strategy';
import { User } from '../user/user.entity';

@Injectable()
export class PremiumInterestRateStrategy implements InterestRateStrategy {
  calculate(user: User): number {
    return user.creditScore > 700 ? 3 : 10;
  }
}