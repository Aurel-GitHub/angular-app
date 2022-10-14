import { IBudget } from './i-budgets';
import { IUser } from './i-user';

export interface IExpenses {
  title: string;
  total: string;
  isFixed: boolean;
  isVariable: boolean;
  hasPassed: boolean;
  datePassed: boolean;
  enDateIsFixed: boolean;
  commment: string;
  user: IUser;
  budget: IBudget;
}
