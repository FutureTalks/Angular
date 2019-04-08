import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AfService {

  constructor(private afAuth: AngularFireAuth) { }

  
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
  
  doGoogleLogout(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
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

}
