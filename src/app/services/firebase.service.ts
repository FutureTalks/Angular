import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Content } from "../models/Content";
import { UserRight } from '../models/UserRight';
import { Accordion } from '../models/Accordion';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {}

  get<T>(collection, ref){
    return this.db.collection<T>(collection, ref).valueChanges();
  }
  
  getContent(page){
    return this.get<Content>('contents', ref => ref.where('title', '==', page));
  }
  
  getUserRights(email){
    return this.get<UserRight>('users', ref => ref.where('email', '==', email));
  }
  
  getAccordion(topic){
    return this.get<Accordion>(topic, ref => ref);
  }
}
