import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Content } from '../../models/Content';
import { AuthService } from 'src/app/services/auth.service';
import { Rights } from 'src/app/models/enum/Rights';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  rights: Rights;
  user: firebase.User;
  content: Content;
  
  constructor(private auth: AuthService, private firebase: FirebaseService) {
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
