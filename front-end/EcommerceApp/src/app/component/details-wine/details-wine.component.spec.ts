import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWineComponent } from './details-wine.component';

describe('DetailsWineComponent', () => {
  let component: DetailsWineComponent;
  let fixture: ComponentFixture<DetailsWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsWineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
