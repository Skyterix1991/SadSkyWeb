import {Day} from './day.model';
import {User} from './user.model';

export class Prediction {
  predictionId: string;
  owner: User;
  days: Day[];
  depressionResult: string;
  anxietyResult: string;
  expireDays: number;
  expireDate: number[];
  updateDate: number;
  createDate: number;
}
