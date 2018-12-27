import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpService } from '../../services/http.service';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  nextRout: string;
  username: string;
  password: string;
  validateForm: FormGroup;

  constructor(private router: Router, private http:HttpService, private fb: FormBuilder, private message: NzMessageService,) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  enterEvent(e) {
    var key_code = window.event?e.keyCode:e.which;
    if(key_code === 13){
      this.handleLogin();
    }
  }

  handleLogin() {
    const username = this.validateForm.value.userName;
    const password = this.validateForm.value.password;
    const params = {
      username: username,
      password: password
    }
    const that = this;
    this.http.post('data', params)
      .subscribe(
      (res) => {
        if (res.error) {
          if (+res.error.returnCode === 1) {
            this.message.error('用户名或密码错误');
          } 
        }
        if(!res.data){
          return; //zyr
        }
        let formatData = Object.assign(res.data, {
          username: that.validateForm.value.userName
        });
        Cookie.set('loginInfo', JSON.stringify(formatData));
        that.nextRout = 'main/deploy';
        that.router.navigate([that.nextRout]);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
