import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { UserRight } from 'src/app/models/UserRight';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firebase: FirebaseService) { }

  
  getUserRights(userId){
    return this.firebase.getDocPath<UserRight>('users/'+userId);
  }
  
  getAllUser(){
    return this.firebase.get<UserRight>('users', ref => ref);
  }

}
