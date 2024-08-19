import { User } from "../user/user.entity";


export interface InterestRateStrategy {
    calculate(user: User): number;
  }