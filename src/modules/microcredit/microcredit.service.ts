import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreditCalculationService } from './credit-calculation.service';
import { MicrocreditRegistryService } from './microcredit-registry.service';
import { User } from '../user/user.entity';
import { Microcredit } from './microcredit.entity';

@Injectable()
export class MicrocreditService {
  constructor(
    private readonly userService: UserService,
    private readonly creditCalculationService: CreditCalculationService,
    private readonly microcreditRegistryService: MicrocreditRegistryService
  ) {}

  applyForMicrocredit(userId: string, amount: number): Microcredit {
    const user = this.userService.getUserById(userId);
    const interestRate = this.creditCalculationService.calculateInterestRate(user);
    const microcredit = new Microcredit(userId, amount, interestRate, 'PENDING');
    this.microcreditRegistryService.save(microcredit);
    return microcredit;
  }
}