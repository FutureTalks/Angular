import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Content } from '../../models/Content';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  content: Content;
  
  constructor(private firebase: FirebaseService) {
    this.firebase.getContent('Private').subscribe(items => this.content = items[0]);
  }

  ngOnInit() {
  }


}
