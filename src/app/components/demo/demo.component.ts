import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(
    private http:HttpService, 
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const params = {

    }
    this.http.post('adminLogin', params)
      .subscribe(
      (res) => {
        if (+res.code === 200) {
        } else {
          console.log(res.msg);
        }
      },
      (error) => {
        this.message.error(error);
        console.log(error);
      }
    )
  }

}
