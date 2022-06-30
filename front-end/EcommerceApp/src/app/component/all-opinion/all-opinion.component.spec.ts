import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOpinionComponent } from './all-opinion.component';

describe('AllOpinionComponent', () => {
  let component: AllOpinionComponent;
  let fixture: ComponentFixture<AllOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
