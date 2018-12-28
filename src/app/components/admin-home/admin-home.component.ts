import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  // 左导是否收起
  isCollapsed = false;
  
  triggerTemplate = null;

  username: String = '用户';

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  constructor() { }

  ngOnInit() {
  }

  /**
   * 登出
   */
  logout() {
    Cookie.set('loginInfo', null);
  }

}
