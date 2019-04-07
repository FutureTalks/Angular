import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Content } from "../models/Content";

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
}
