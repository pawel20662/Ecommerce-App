import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWineComponent } from './update-wine.component';

describe('UpdateWineComponent', () => {
  let component: UpdateWineComponent;
  let fixture: ComponentFixture<UpdateWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
