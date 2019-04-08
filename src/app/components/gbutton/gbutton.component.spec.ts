import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbuttonComponent } from './gbutton.component';

describe('GbuttonComponent', () => {
  let component: GbuttonComponent;
  let fixture: ComponentFixture<GbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
