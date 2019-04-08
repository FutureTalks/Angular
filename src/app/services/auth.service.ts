import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authInfo: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(userInfo => this.authInfo = userInfo);
  }
  
  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      })
    })
  }
  
  doLogout(){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth
      .signOut()
      .then(res => {
        resolve(res);
      })
    })
  }

  getAuthState(){
    return this.afAuth.authState;
  }

  getUser(){
    return this.authInfo;
  }

}
