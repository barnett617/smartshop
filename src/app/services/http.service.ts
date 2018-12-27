import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';

import * as md5 from 'md5';

import apis from '../apis';

const env = environment.env;

console.log('env', env);

const getUrlFromApis = api => apis[api][env];

const calcDefaultParams = (app) => {
  return {
    mobileType: app.mobileType,
    token: app.token,
    versionNumber: app.versionNumber,
    userId: app.userId, // 这个不是必须的
    // appKey: app.appKey
  };
};

const hostDebug = app => {
  if (app.host.charAt(app.host.length - 1) === '/') {
    app.host = app.host.slice(0, app.host.length - 1);
  } else {
    // app.host += '/';
  }
};

function obj2Str(obj, lianjiefu = '&') {
  console.log(obj);
  let i = '';
  for (let k in obj) {
    i += k + '=' + obj[k] + lianjiefu;
  }
  if (i.length) {
    i = i.slice(0, i.length - 1); // 去掉最后的&
  }
  return i;
}

const getHeader = (token, signMsg) => new HttpHeaders({
  'token': token,
  'signMsg': signMsg
});

const getHeaderPost = (token, signMsg) => new HttpHeaders({
  'token': token,
  'signMsg': signMsg,
  'Content-Type': 'application/x-www-form-urlencoded'
});

@Injectable()
export class HttpService {
  co: any;

  constructor(private http: HttpClient) {
    this.co = window.createObserver;
  }

  calcSignMsg(app, ops) {

    const app2 = calcDefaultParams(app);
    const appKeyAoauthToken = app.appKey + app.token;

    const ctm = Object.assign({}, app2, ops);

    const ctmArr = [];
    for (let i in ctm) {
      ctmArr.push(i + '=' + ctm[i]);
    }
    const canshuArr = ctmArr.sort();

    const signMsg = md5(appKeyAoauthToken + canshuArr.join('|'));
    return [signMsg.toUpperCase(), canshuArr];
  }

  get(api, option = {}) {
    const url = getUrlFromApis(api);
    return this.co()
      .pipe(mergeMap(app => {
        hostDebug(app);
        const [signMsg, canshu] = this.calcSignMsg(app, option);
        return this.http.get((<any>app).host + url + '?' + canshu.join('&'),
          {headers: getHeader((<any>app).token, signMsg)});
      }));
  }

  fetchInfo() {
    return this.co()
      .pipe(
        mergeMap(app =>
          from([JSON.parse(JSON.stringify(app))])
        ));
  }

  post(api, option = {}) {
    const url = getUrlFromApis(api);
    return this.co()
      .pipe(mergeMap(app => {
        hostDebug(app);
        const [signMsg, canshu] = this.calcSignMsg(app, option);
        return this.http.post((<any>app).host + url, canshu.join('&'),
          {headers: getHeaderPost((<any>app).token, signMsg)});
      }));
  }

  login(api, option = {}) {
    // 需要app给我appKey和host
    //post /api/api/user/isPhoneExists.htm,mobileType,phone,versionNumber
    //post /api/api/user/login.htm  loginName,loginPwd,mobileType,versionNumber

    // @ts-ignore
    if (option.loginPwd) {
      // @ts-ignore
      option.loginPwd = md5(option.loginPwd).toUpperCase();
    }

    const url = getUrlFromApis(api);
    const head = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });


    return this.co()
      .pipe(mergeMap((app: any) => {
        hostDebug(app);


        if (api === 'isPhoneExists') {
          // @ts-ignore
          return this.http.get((<any>app).host + url + '?phone=' + option.phone);
        }


        const ctmArr = [];
        const option2 = Object.assign({}, option, {
          mobileType: app.mobileType,
          versionNumber: app.versionNumber
        });
        for (let i in option2) {
          ctmArr.push(i + '=' + option2[i]);
        }
        const canshuArr = ctmArr.sort();
        console.log(app.appKey + canshuArr.join('|'));
        const signMsg = md5(app.appKey + canshuArr.join('|')).toUpperCase();
        const header = new HttpHeaders({
          'signMsg': signMsg,
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        console.log('url', (<any>app).host + url);
        console.log('canshuArr.join(\'&\')', canshuArr.join('&'));
        console.log({headers: header});
        return this.http.post((<any>app).host + url, canshuArr.join('&'),
          {headers: header});
      }));
  }
}

// scp -r . root@47.94.98.243:/data/release/api/cashloan-api-1.0.1/h5
// scp hybrid.zip root@47.94.98.243:/www/server/apache-tomcat-8.5.35/webapps/cashloan-api-1.0.1/h5
// Qweasd123

// http://47.94.98.243/api/h5/index.html

//git rev-parse --short HEAD
//  zip -r webview.zip *
// <script>document.write('<base href="' + document.location + '" />');</script>
