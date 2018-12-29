import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Menus } from '../../utils/enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  // 左导是否收起
  isCollapsed = false;

  menus = [];
  
  triggerTemplate = null;

  username: String = '用户';

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  constructor(
    private router: Router, 
  ) { }

  ngOnInit() {
    this.menus = Menus;
  }

  /**
   * 登出
   */
  logout() {
    Cookie.set('loginInfo', null);
    setTimeout(() => {
      this.router.navigate(['admin-login']);
    }, 1500)
  }

}
