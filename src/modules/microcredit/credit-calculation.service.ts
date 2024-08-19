import { Injectable, Inject } from '@nestjs/common';
import { User } from '../user/user.entity';
import { InterestRateStrategy } from '../strategies/interest-rate.strategy';

@Injectable()
export class CreditCalculationService {
  constructor(
    @Inject('INTEREST_RATE_STRATEGY') private readonly strategy: InterestRateStrategy
  ) {}

  calculateInterestRate(user: User): number {
    return this.strategy.calculate(user);
  }
}