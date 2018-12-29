import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-goods-manage',
  templateUrl: './admin-goods-manage.component.html',
  styleUrls: ['./admin-goods-manage.component.scss']
})
export class AdminGoodsManageComponent implements OnInit {

  dataSet = [
    {
      key: '1',
      img: '',
      name: '鸡肉',
      category: '肉类',
      unit: '克',
      price: '10',
      description: '牛肉',
      createTime: '2018-12-27',
    },
    {
      key: '1',
      img: '',
      name: '牛肉',
      category: '肉类',
      unit: '克',
      price: '10',
      description: '牛肉',
      createTime: '2018-12-27',
    },
    {
      key: '1',
      img: '',
      name: '猪肉',
      category: '肉类',
      unit: '克',
      price: '10',
      description: '牛肉',
      createTime: '2018-12-27',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
