import { Component, OnInit, Input } from '@angular/core';
import { DogService } from 'src/app//services/content/dog.service';
import { Content } from 'src/app/models/Content';
import { Accordion } from 'src/app/models/Accordion';
import { ContentService } from 'src/app/services/content/content.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  content: Content;
  source="";
  talks: Accordion[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  
  constructor(private breakpointObserver: BreakpointObserver, private dogService: DogService, private firebase: ContentService){
    this.firebase.getAccordion('talks').subscribe(items => this.talks = items.sort((a, b) => b.order - a.order));
    this.firebase.getContent('Projects').subscribe(items => this.content = items[0]);
    this.getDog();
  }

  ngOnInit(){ 
  }

  getDog(){
    this.dogService.get().subscribe(resp => this.source=resp.message);
  }

}
