import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { map } from"rxjs/operators";
import { objectAssign } from './object-assign';

import * as md5 from 'md5';

import apis from '../apis';

const env = environment.env;

console.log('env', env);

const getUrlFromApis = api => apis[api][env];

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

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  
  post(apiName, dataObj, isIntercept = true, isFromAuth = false) {
    let cookieStr = Cookie.get('loginInfo');
    let cookieObj:any = {};
    let cookieData:any = {};
    if (cookieStr) {
        try {
            cookieObj = JSON.parse(cookieStr);
            cookieData = {
                token: cookieObj.token,
            };
        }
        catch(e) {
            console.log('parse cookie error...');
        }
    }
    let data = objectAssign({}, cookieData, dataObj);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const reqUrl = getUrlFromApis(apiName);
    var requestoptions = new RequestOptions({
        headers: headers,
        method: 'post',
        body: data || {}
    })
    return this.http.request(reqUrl, requestoptions)
        .pipe(map((res: Response) => res.json()))
  }

}