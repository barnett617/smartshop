import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dish-manage',
  templateUrl: './admin-dish-manage.component.html',
  styleUrls: ['./admin-dish-manage.component.scss']
})
export class AdminDishManageComponent implements OnInit {

  dataSet = [
    {
      key: '1',
      name: '西红柿炒鸡蛋',
      itema: '西红柿',
      itemb: '鸡蛋',
      itemc: '',
      itemd: '',
      iteme: '',
      createTime: '2018-12-27',
    },
    {
      key: '2',
      name: '西红柿炖牛腩',
      itema: '西红柿',
      itemb: '牛肉',
      itemc: '',
      itemd: '',
      iteme: '',
      createTime: '2018-12-27',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
