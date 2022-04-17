import { Injectable } from '@angular/core';

import { UserInfo } from '../shared/userInfo-model';
import { User_Data } from '../shared/user_data';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private user!: UserInfo[];

  constructor() { }

  getUserInfo(): UserInfo[] {
    return User_Data;
  }
}
