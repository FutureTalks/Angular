import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Accordion } from 'src/app/models/Accordion';
import { Content } from 'src/app/models/Content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private firebase: FirebaseService) { }
  
  getContent(page){
    return this.firebase.get<Content>('contents', ref => ref.where('title', '==', page));
  }

  getAccordion(topic){
    return this.firebase.get<Accordion>(topic, ref => ref);
  }
}
