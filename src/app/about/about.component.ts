import { Component, OnInit } from '@angular/core';
import { Content } from '../models/Content';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  content: Content;
  panelOpenState: boolean;
  
  constructor(private firebase: FirebaseService) {
    this.firebase.getContent('About').subscribe(items => this.content = items[0]);
  }

  ngOnInit() {
  }

}
