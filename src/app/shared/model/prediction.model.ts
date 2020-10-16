import {Day} from './day.model';
import {User} from './user.model';

export class Prediction {
  predictionId: string;
  owner: User;
  days: Day[];
  depressionResult: { NEGATIVE, MILD_DEPRESSION, SEVERE_DEPRESSION };
  anxietyResult: { NEGATIVE, MILD_ANXIETY, SEVERE_ANXIETY };
  expireDate: number[];
  updateDate: number;
  createDate: number;
}
