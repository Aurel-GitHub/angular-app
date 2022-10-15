import { IBudget } from './i-budgets';
import { IUser } from './i-user';

export interface IExpenses {
  _id: string;
  title: string;
  total: string;
  isFixed: boolean;
  isVariable: boolean;
  hasPassed: boolean;
  datePassed: Date;
  enDateIsFixed: Date;
  commment: string;
  user: IUser;
  budget: IBudget;
}
