export class User {
    constructor(
      public id: string,
      public name: string,
      public creditScore: number,
      public financialHistory: FinancialRecord[]
    ) {}
  }
  
  export class FinancialRecord {
    constructor(
      public recordId: string,
      public amount: number,
      public date: Date
    ) {}
  }