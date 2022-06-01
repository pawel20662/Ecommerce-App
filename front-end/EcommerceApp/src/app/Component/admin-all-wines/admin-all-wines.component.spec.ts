import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllWinesComponent } from './admin-all-wines.component';

describe('AdminAllWinesComponent', () => {
  let component: AdminAllWinesComponent;
  let fixture: ComponentFixture<AdminAllWinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllWinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
