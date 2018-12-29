import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGoodsEditComponent } from './admin-goods-edit.component';

describe('AdminGoodsEditComponent', () => {
  let component: AdminGoodsEditComponent;
  let fixture: ComponentFixture<AdminGoodsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGoodsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGoodsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
