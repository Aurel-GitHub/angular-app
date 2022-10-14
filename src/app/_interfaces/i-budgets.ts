import { IUser } from './i-user';

export interface IBudget {
  title: string;
  total: number;
  isMonthly: boolean;
  isAnnuary: boolean;
  user: IUser;
}
