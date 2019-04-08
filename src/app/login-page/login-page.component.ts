import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: firebase.User;

  constructor(private afAuth: AuthService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  doGoogleLogin(){
    this.afAuth.doGoogleLogin().then(() => this.getUserInfo());
  }

  doGoogleLogout(){
    this.afAuth.doLogout().then(() => this.getUserInfo());
  }

  getUserInfo(){
    this.afAuth.getAuthState().subscribe(userInfo => {
      this.user = userInfo;
    });
  }

}