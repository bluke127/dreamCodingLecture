import { User } from '@/model/user';

declare module 'Element' {
  interface Element {
    user: User;
  }
}
