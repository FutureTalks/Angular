import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { UserRight } from 'src/app/models/UserRight';
import { Accordion } from 'src/app/models/Accordion';
import { Content } from 'src/app/models/Content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private fb: FirebaseService) { }
  
  getContent(page){
    return this.fb.get<Content>('contents', ref => ref.where('title', '==', page));
  }
  
  getUserRights(email){
    return this.fb.get<UserRight>('users', ref => ref.where('email', '==', email));
  }
  
  getAccordion(topic){
    return this.fb.get<Accordion>(topic, ref => ref);
  }
}
