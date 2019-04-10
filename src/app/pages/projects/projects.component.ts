import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { Content } from 'src/app/models/Content';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Accordion } from 'src/app/models/Accordion';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  content: Content;
  source: string;
  talks: Accordion[];
  
  constructor(private dogService: DogService, private firebase: FirebaseService){
    this.firebase.getAccordion('talks').subscribe(items => this.talks = items.sort((a, b) => b.order - a.order));
  }

  async ngOnInit(){
    this.firebase.getContent('Projects').subscribe(items => this.content = items[0]);
    this.source = await this.dogService.get();
  }

  async getDog(){
    this.source = await this.dogService.get();
  }

}
