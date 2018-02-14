import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MembreService} from '../../services/membre.service';
import {FormsModule} from '@angular/forms';
import {User} from '../classes/user';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = { name: '', lastname: '', naissance: '', mail: '', password: '', confirm: ''};
  membre: User;
  constructor(public service: MembreService, public form: FormsModule) {
  }

  private goSignin() {
    console.log(this.user);
    this.service.addUser(this.user)
      .then(reponse => {this.membre = reponse.json(); console.log('okok' + this.membre.id);
      } );
    alert('Inscription effectuée!');
    window.location.href = '/login';
  }
  ngOnInit() {
  }

}
