import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertWineComponent } from './dessert-wine.component';

describe('DessertWineComponent', () => {
  let component: DessertWineComponent;
  let fixture: ComponentFixture<DessertWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DessertWineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
