import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationplanComponent } from './creationplan.component';

describe('CreationplanComponent', () => {
  let component: CreationplanComponent;
  let fixture: ComponentFixture<CreationplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
