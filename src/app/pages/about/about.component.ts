import { Component, OnInit } from '@angular/core';
import { Content } from '../../models/Content';
import { FirebaseService } from '../../services/firebase.service';
import { Accordion } from 'src/app/models/Accordion';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  abouts: Accordion[];
  faqs: Accordion[];
  
  constructor(private firebase: FirebaseService) {
    this.firebase.getAccordion('about').subscribe(items => this.abouts = items.sort((a, b) => a.order - b.order));
    this.firebase.getAccordion('faq').subscribe(items => this.faqs = items.sort((a, b) => a.order - b.order));
  }

  ngOnInit() {
  }

}
