import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-admin-goods-edit',
  templateUrl: './admin-goods-edit.component.html',
  styleUrls: ['./admin-goods-edit.component.scss']
})
export class AdminGoodsEditComponent implements OnInit {

  validateForm: FormGroup;

  defaultFileList = [
    {
      uid: -1,
      name: '示例图片.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
  ];

  img = [...this.defaultFileList];

  constructor(
    private fb: FormBuilder,
    private activeRouter: ActivatedRoute,
    private http:HttpService,
    private message: NzMessageService,
  ) {
    this.formData({})
  }

  ngOnInit() {
    this.getParams()
  }

  formData(obj) {
    this.validateForm = this.fb.group({
      // userName: [ '', [ Validators.required ], [ this.userNameAsyncValidator ] ],
      name: [ '', [ Validators.required ] ],
      type   : [ '', [ Validators.required ] ],
      unit: [ '', [ Validators.required ] ],
      price: [ '', [ Validators.required ] ],
      // img: [ '', [ Validators.required ] ],
      comment : [ '', [ Validators.required ] ],
      confirm : [ '', [ this.confirmValidator ] ],
    });
  }

  getParams() {
    this.activeRouter.queryParams.subscribe((params: Params) => {
       if (params['id']) {
          this.getData(params['id']);
       } else {
          this.formData({})
       }
    })
  }

  getData(id) {
    const params = {
      id: id
    }
    this.http.post('singleGoods', params)
      .subscribe(
      (res) => {
        if (+res.code === 200) {
          const data = res.data
          this.validateForm = this.fb.group({
            name: [ data.name, [ Validators.required ] ],
            type   : [ data.type, [ Validators.required ] ],
            unit: [ data.unit, [ Validators.required ] ],
            price: [ data.price, [ Validators.required ] ],
            comment : [ data.comment, [ Validators.required ] ],
            // confirm : [ data.type, [ this.confirmValidator ] ],
          });
          let fileList = [Object.assign({}, {
            uid: -1,
            name: '示例图片.png',
            status: 'done',
            url: data.img,
            thumbUrl: data.img
          })];
          this.img = [...fileList]
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

  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
      this.validateForm.controls[ key ].updateValueAndValidity();
    }
    console.log(value);
  };

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
    setTimeout(() => {
      if (control.value === 'JasonWood') {
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  });

  confirmValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  };

}
