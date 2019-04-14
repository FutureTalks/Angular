import { Component, OnInit } from '@angular/core';
import { UserRight } from 'src/app/models/UserRight';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-manager-panel',
  templateUrl: './manager-panel.component.html',
  styleUrls: ['./manager-panel.component.scss']
})
export class ManagerPanelComponent implements OnInit {
    users: UserRight[];


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(items => this.users=items);
  }

}
