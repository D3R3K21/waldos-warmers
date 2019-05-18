import { IPost } from './ipost';

export class Post implements IPost {
  message: string;
  id: string;
  color: string;
  constructor() {
    this.color = '00d1d1';
  }
}
