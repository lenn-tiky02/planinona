import { Component, OnInit } from '@angular/core';
import {User} from '../classes/user';
import {MembreService} from '../../services/membre.service';
import {SigninComponent} from '../signin/signin.component';
import {FormsModule} from '@angular/forms';
import {AuthServiceProvider} from '../../services/auth.service';
import {GlobalServiceProvider} from '../../services/global.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  erreur: string;
  mail: string;
  pass: string;
  membre: User;
  responseData: any;
  userData = {'login': '', 'password': ''};
  constructor(public service: MembreService, public form: FormsModule,
              public authService: AuthServiceProvider, public globalService: GlobalServiceProvider) {
   /* this.service.testMembre().then(reponse => {
      console.log(reponse);
    }); */
  }

  ngOnInit() {
  }
  connection() {
    this.authService.login(this.userData)
      .then(data => {
        this.responseData = data;
        // console.log(this.responseData._body);
        if (JSON.parse(this.responseData._body).id === '0') {
          alert('Ce compte n existe pas');
        } else if (JSON.parse(this.responseData._body).id === '1') {
          alert('Mot de passe incorrect');
        } else {
          // this.authService.setMailUser(JSON.parse(this.responseData._body).adresseMail);
          // this.globalService.setCurrentUser(this.responseData._body);
          this.authService.setMailUser(JSON.parse(this.responseData._body).adresseMail);
          this.globalService.currentUser = this.responseData._body;
          localStorage.setItem('user', this.responseData._body);
           console.log('CURRENT USER', JSON.parse(this.globalService.getCurrentUser()));
          // this.sendMessage(this.responseData._body);
          window.location.href = '/publication';
        }
      }, (err) => {
        alert('Veuillez reessayer!');
        console.log(err);
      });
  }
  logins() {
    if (this.userData.login === '' || this.userData.password === '') {
     alert('Veuillez completer tous les Champs');
    } else if (this.userData.password.length < 7) {
    alert('Mot de passe doit contenir au moins six caractère');
    } else {
      this.connection();
    }
  }

  private goLogin() {
  //  console.log('lasa nanao login');
   // console.log(this.mail);
  //  console.log(this.pass);
    this.service.testUser(this.mail, this.pass)
      .subscribe(reponse => {this.membre = reponse.json(); console.log('okok' + this.membre.id);
        if (this.membre.id === '0') {
          console.log('Tsy misy' + this.membre.id);
          this.erreur = 'E-mail et mot de passe incorrect!'; } else if (this.membre.id === '1') {
          console.log(' misy' + this.membre.id);
          this.erreur = 'Mot de passe incorrect!';
        } else { window.location.href = '/publication'; }

      } );
    //  console.log('resultat ==' + this.membre.id );
    //  this.navCtrl.push(AccueilPage,this.utilisateur);
    //  .localeCompare('0') === 1
  }


}
