import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    source: string;

  constructor(private dogService: DogService) { }

  async ngOnInit() {
      this.source = await this.dogService.get();
  }

  async getDog(){
    this.source = await this.dogService.get();
  }

}
