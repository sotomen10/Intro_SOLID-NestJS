import { Microcredit } from './microcredit.entity';
import { Injectable } from '@nestjs/common';


@Injectable()
export class MicrocreditRepository {
  private microcredits: Microcredit[] = [];

  save(microcredit: Microcredit): void {
    this.microcredits.push(microcredit);
  }

  // Métodos adicionales para manejar microcréditos
}