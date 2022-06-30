import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwineComponent } from './addwine.component';

describe('AddwineComponent', () => {
  let component: AddwineComponent;
  let fixture: ComponentFixture<AddwineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddwineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
