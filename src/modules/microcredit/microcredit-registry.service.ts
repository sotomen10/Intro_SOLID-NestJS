import { Injectable } from '@nestjs/common';
import { MicrocreditRepository } from './microcredit.repository';
import { Microcredit } from './microcredit.entity';

@Injectable()
export class MicrocreditRegistryService {
  constructor(private readonly microcreditRepository: MicrocreditRepository) {}

  save(microcredit: Microcredit): void {
    this.microcreditRepository.save(microcredit);
  }
}