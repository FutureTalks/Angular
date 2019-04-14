import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user: firebase.User;

  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe(userInfo => {
      this.user = userInfo;
    });
  }
  
  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.auth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      })
    })
  }
  
  doLogout(){
    return new Promise<any>((resolve, reject) => {
      this.auth.auth
      .signOut()
      .then(res => {
        resolve(res);
      })
    })
  }

  getAuthState(){
    return this.auth.authState;
  }

  getUser(){
    return this.user;
  }
}
