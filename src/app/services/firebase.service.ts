import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {}

  add<T>(collection, values){
    return this.db.collection<T>(collection).add(values);
  }
  get<T>(collection, ref){
    return this.db.collection<T>(collection, ref).valueChanges();
  }
  getDoc(collection, ref){
    return this.db.collection(collection, ref).doc;
  }
  getDocPath<T>(path){
    return this.db.doc<T>(path).valueChanges();
  }
  update<T>(itemDoc:AngularFirestoreDocument<T>, item:T){
    return itemDoc.update(item);
  }
  delete(itemDoc:AngularFirestoreDocument){
    return itemDoc.delete();
  }
}
