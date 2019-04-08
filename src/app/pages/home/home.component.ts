import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Content } from "../../models/Content";
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content: Content;
  
  constructor(private firebase: FirebaseService) {
    this.firebase.getContent('Home').subscribe(items => this.content = items[0]);
  }

  ngOnInit() {
  }

}
