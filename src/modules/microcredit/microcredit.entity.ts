export class Microcredit {
    constructor(
      public userId: string,
      public amount: number,
      public interestRate: number,
      public status: string
    ) {}
  }