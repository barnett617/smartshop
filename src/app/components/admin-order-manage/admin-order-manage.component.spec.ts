import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderManageComponent } from './admin-order-manage.component';

describe('AdminOrderManageComponent', () => {
  let component: AdminOrderManageComponent;
  let fixture: ComponentFixture<AdminOrderManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
