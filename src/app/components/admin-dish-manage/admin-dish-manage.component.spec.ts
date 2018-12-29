import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDishManageComponent } from './admin-dish-manage.component';

describe('AdminDishManageComponent', () => {
  let component: AdminDishManageComponent;
  let fixture: ComponentFixture<AdminDishManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDishManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDishManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
