import { User } from './user';

export class Event {
  _id: string;
  name: string;
  admin: User;
  category: string;

  constructor(_id: string, name: string, admin: User, category: string) {
    this._id = _id;
    this.name = name;
    this.admin = admin;
    this.category = category;
  }
}
