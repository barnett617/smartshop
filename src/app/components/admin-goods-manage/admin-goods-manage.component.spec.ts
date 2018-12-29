import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGoodsManageComponent } from './admin-goods-manage.component';

describe('AdminGoodsManageComponent', () => {
  let component: AdminGoodsManageComponent;
  let fixture: ComponentFixture<AdminGoodsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGoodsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGoodsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
