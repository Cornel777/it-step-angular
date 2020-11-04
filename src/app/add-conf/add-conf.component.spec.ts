import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConfComponent } from './add-conf.component';

describe('AddConfComponent', () => {
  let component: AddConfComponent;
  let fixture: ComponentFixture<AddConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
