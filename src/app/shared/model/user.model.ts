import {Group} from './group.model';

export class User {
  userId: string;
  firstName: string;
  lastName: string;
  birthDay: Date;
  email: string;
  group: Group;
  lastTokenRevokeDate: Date;
  updateDate: Date;
  createDate: Date;
}
