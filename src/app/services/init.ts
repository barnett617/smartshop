// http://reactivex.io/rxjs/class/es6/MiscJSDoc.js~ObserverDoc.html

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

declare global {
  interface Window {
    getUserInfoProxy: Function;
    userInfoCbContent: any; // json对象
    getUserInfo: Function;
    tianlang: any;
    getUserInfoCb: any;
    createObserver: any;
    Liveness: any;
    setLoginInfo: Function;
  }
}


if (environment.env === 'dev') {
  const mock = {
    mobileType: 2,
    appKey: 'oQIhAP24Kb3Bsf7IE14wpl751bQc9VAPsFZ+LdB4riBgg2TDAiEAsSomOO1v8mK2VWhEQh6mttgN',
    token: 'eb646f4a2c8f40cea40c900b14d90f75',
    userId: 957,  // 不是app的默认参数
    versionNumber: '1.0.8',
    phone: '18812345678',
    host: 'http://' + location.host   // app那边给的形式是 http://x.x.x.x/api/
  };
  window.tianlang = window.tianlang || {};


  window.tianlang.getLoginInfo = window.tianlang.getLoginInfo || function () {
    window.setLoginInfo(mock);
  };
}


window['tl_observers'] = [];

window['getUserInfoCb'] = function (content) {
  window['userInfoCbContent'] = content || window['userInfoCbContent'];
  window['tl_observers'].forEach(observer => {
    observer.next(window['userInfoCbContent']);
    observer.complete();
  });
  window['tl_observers'] = [];
};

window['createObserver'] = () => Observable.create(function (observer) {
  window['tl_observers'].push(observer);
  if (navigator.userAgent.toLowerCase().includes('android')) {
    window.tianlang.getLoginInfo();
  } else {
  }
});

window.setLoginInfo = function (content) {
  // ios,didFinishNavigation,app调用这个方法给传过来
  console.log('setLoginInfo', content);
  window.userInfoCbContent = typeof content === 'string' ? JSON.parse(content) : content;
  window.getUserInfoCb(window.userInfoCbContent);
};

