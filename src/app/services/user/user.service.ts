import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { UserRight } from 'src/app/models/UserRight';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firebase: FirebaseService, afAuth: AuthService) { }

  
  getUserRights(userId){
    return this.firebase.getDocPath<UserRight>('users/'+userId);
  }
  
  getAllUser(){
    return this.firebase.get<UserRight>('users', ref => ref);
  }
  
  putUser(user: UserRight, id){
    return this.firebase.addId<UserRight>('users', user, id)
  }

}
