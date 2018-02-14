import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalServiceProvider } from './global.service';
import 'rxjs/add/operator/map';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  apiUrl = this.globalservice.getLienSpring() + '/user/';

  mailUser: any;

  constructor(public http: Http, public globalservice: GlobalServiceProvider) {
    console.log('Hello AuthServiceProvider Provider');
  }

  getMailUser() {
    return this.mailUser;
  }

  setMailUser(email: String) {
    this.mailUser = email;
  }

  login(data) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );
    const options = new RequestOptions({ headers: headers });
    return new Promise(resolve => {
      this.http.post(this.apiUrl + 'login' , data , options).subscribe(res => {
        resolve(res);
      }, err => {
        console.log(err);
      });
    });
  }

  signIn(data) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );
    const options = new RequestOptions({ headers: headers });
    return new Promise(resolve => {
      this.http.post(this.apiUrl + 'signup', data, options)
        .subscribe(res => {
          resolve(res);
          console.log(res['_body']);
        }, error => {
          console.log(error); // Error getting the data
        });
    });
  }

}
