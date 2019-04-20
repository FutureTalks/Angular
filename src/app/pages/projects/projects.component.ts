import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app//services/content/dog.service';
import { Content } from 'src/app/models/Content';
import { Accordion } from 'src/app/models/Accordion';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  content: Content;
  source="";
  talks: Accordion[];
  
  constructor(private dogService: DogService, private firebase: ContentService){
    this.firebase.getAccordion('talks').subscribe(items => this.talks = items.sort((a, b) => b.order - a.order));
    this.firebase.getContent('Projects').subscribe(items => this.content = items[0]);
    this.getDog();
  }

  ngOnInit(){
  }

  async getDog(){
    this.dogService.get().subscribe(resp => this.source=resp.message);
  }

}
