import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-manage',
  templateUrl: './admin-user-manage.component.html',
  styleUrls: ['./admin-user-manage.component.scss']
})
export class AdminUserManageComponent implements OnInit {

  dataSet = [
    {
      key: '1',
      username: '阿泽',
      sex: '男',
      age: '24',
      email: 'liaoze@qq.com',
      block: '否',
      role: '管理员',
      discount: '7',
      createTime: '2018-12-27',
    },
    {
      key: '2',
      username: '阿鑫',
      sex: '男',
      age: '24',
      email: 'xin@qq.com',
      block: '否',
      role: '管理员',
      discount: '7',
      createTime: '2018-12-27',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
