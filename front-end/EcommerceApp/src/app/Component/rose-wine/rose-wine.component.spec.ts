import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseWineComponent } from './rose-wine.component';

describe('RoseWineComponent', () => {
  let component: RoseWineComponent;
  let fixture: ComponentFixture<RoseWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoseWineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoseWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
