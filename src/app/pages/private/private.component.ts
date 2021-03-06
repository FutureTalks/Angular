import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app//models/Content';
import { AuthService } from 'src/app/services/auth.service';
import { Rights } from 'src/app/models/enum/Rights';
import { ContentService } from 'src/app/services/content/content.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserRight } from 'src/app/models/UserRight';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  rights: Rights;
  user: firebase.User;
  content: Content;
  
  constructor(auth: AuthService, userService: UserService, firebase: ContentService) {
    firebase.getContent('Private').subscribe(items => this.content = items[0]);
    auth.getAuthState().subscribe(userInfo => {
      this.user = userInfo;
      if (this.user){
        userService.getUserRights(this.user.uid).subscribe(userRights => {
          if (userRights){
            this.rights = userRights.rights;
          }
          else {
              let tempUser: UserRight = {
                email: this.user.email,
                rights: Rights.None,
                userId: this.user.uid
              }
            userService.putUser(tempUser, this.user.uid)
            this.rights = Rights.None;
          }
        });
      }
    });
  }

  ngOnInit() {
  }

}
