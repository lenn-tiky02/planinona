import { Component, OnInit } from '@angular/core';
import {AdresseServiceProvider} from '../../services/adresse.service';
import {InteretServiceProvider} from '../../services/interet.service';
import {AuthServiceProvider} from '../../services/auth.service';
import {PublicationServiceProvider} from '../../services/publication.service';

@Component({
  selector: 'app-creationplan',
  templateUrl: './creationplan.component.html',
  styleUrls: ['./creationplan.component.css']
})
export class CreationplanComponent implements OnInit {
  tempA: any;
  tempI: any;
  lieux: any;
  interets: any;
  responseData: any;
  nouvPlan = { mailUser: '', titre: '', daty: '', idinteret: '', idadresse: '', paff: '', detail: ''};
  constructor(public adresseservice: AdresseServiceProvider, public interetservice: InteretServiceProvider,
              public userservice: AuthServiceProvider, public pubservice: PublicationServiceProvider) {
    this.nouvPlan.mailUser = JSON.parse(localStorage.getItem('user')).adresseMail;
    console.log ('mailllllll ', this.nouvPlan.mailUser);
    this.getAllInteret();
    this.getAllAdress();
  }

  ngOnInit() {
  }

  getAllAdress() {
    this.adresseservice.getAllAdress()
      .then(data => {
        this.tempA = data;
        this.lieux = JSON.parse(this.tempA._body);
        console.log(this.lieux);
      });
  }

  getAllInteret() {
    this.interetservice.getAllInteret()
      .then(data => {
        this.tempI = data;
        this.interets = JSON.parse(this.tempI._body);
        console.log(this.interets);
      });
  }


  creer() {
    this.pubservice.creerPlan(this.nouvPlan).then(data => {
      this.responseData = data;
      console.log(this.responseData._body);
      if (JSON.parse(this.responseData._body) === '0') {
        alert('Votre évènement n a pas pu être créé!' );
      } else if (JSON.parse(this.responseData._body) === '1') {
        alert('Votre évènement a été créé!' );
      } else {
        window.location.href = '/publication';
      }
    }, (err) => {
      alert('Veuillez reessayer!');
      console.log(err);
    });
  }

}
