import { Component, OnInit } from '@angular/core';
import { AfService } from '../services/af.service';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: firebase.User;

  constructor(private afAuth: AfService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  doGoogleLogin(){
    this.afAuth.doGoogleLogin().then(() => this.getUserInfo());
  }

  doGoogleLogout(){
    this.afAuth.doGoogleLogout().then(() => this.getUserInfo());
  }

  getUserInfo(){
    this.afAuth.getAuthState().subscribe(userInfo => {
      this.user = userInfo;
    });
  }

}
