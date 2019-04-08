import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-gbutton',
  templateUrl: './gbutton.component.html',
  styleUrls: ['./gbutton.component.scss']
})
export class GbuttonComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }
}
