import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app//models/Content';
import { AuthService } from 'src/app/services/auth.service';
import { Rights } from 'src/app/models/enum/Rights';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  rights: Rights;
  user: firebase.User;
  content: Content;
  
  constructor(private auth: AuthService, private firebase: ContentService) {
    this.firebase.getContent('Private').subscribe(items => this.content = items[0]);
    this.auth.getAuthState().subscribe(userInfo => {
      this.user = userInfo;
      if (this.user){
        firebase.getUserRights(this.user.email).subscribe(userRights => {
          if (userRights.length>=1){
            this.rights = userRights[0].rights;
          }
          else {
            this.rights = Rights.User;
          }
        });
      }
    });
  }

  ngOnInit() {
  }


}
