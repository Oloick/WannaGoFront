import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = '192.168.1.74:4500';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  Signin(data) {
  console.log(JSON.stringify(data));
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/auth/sign_in', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

}
