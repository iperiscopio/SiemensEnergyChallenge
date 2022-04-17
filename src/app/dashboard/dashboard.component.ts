import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../service/user-info.service';
import { UserInfo } from '../shared/userInfo-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user!: UserInfo[];

  constructor(private userService: UserInfoService) { }

  ngOnInit(): void {
    this.user = this.userService.getUserInfo();
    
  }

}
