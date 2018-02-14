import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class MembreService {

  private base = 'https://cryptic-sands-30430.herokuapp.com/user';
  // private base = 'http://localhost:8080/user/';

  constructor(public http: Http) {

  }
/*
  public testMembre(): Promise<any> {
    const url = 'http://localhost:8080/membre/isMembre?user=admin&mdp=admin';
    return this.http.get(url).toPromise()
      .then(reponse => reponse.json())
      .catch(erreur => console.log(erreur));
  }*/

  public testUser(mail: string, pass: string): any {
    const url = this.base + '/login/' + mail + '/' + pass;
     return this.http.get(url);
  }

  public addUser(data): any {
    const url = this.base + '/signup' ;
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );
    const options = new RequestOptions({ headers: headers });
    return new Promise(resolve => {
      this.http.post(url, data, options)
        .subscribe(res => {
          console.log(res['_body']);
        }, error => {
          console.log(error);
        });
    });
  }
}
