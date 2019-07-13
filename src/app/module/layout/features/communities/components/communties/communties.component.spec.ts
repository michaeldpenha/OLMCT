import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuntiesComponent } from './communties.component';

describe('CommuntiesComponent', () => {
  let component: CommuntiesComponent;
  let fixture: ComponentFixture<CommuntiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommuntiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuntiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
