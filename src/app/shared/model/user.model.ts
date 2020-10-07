import {Group} from './group.model';

export class User {
  userId: string;
  firstName: string;
  lastName: string;
  birthDay: number[];
  email: string;
  group: Group;
  lastTokenRevokeDate: number;
  updateDate: number;
  createDate: number;
}
