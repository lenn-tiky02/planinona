import { Component, OnInit } from '@angular/core';
import {PublicationServiceProvider} from '../../services/publication.service';
import {AuthServiceProvider} from '../../services/auth.service';
import {GlobalServiceProvider} from '../../services/global.service';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
// Home avec ionic
export class PublicationComponent implements OnInit {


  serverUrl = this.globalService.getLienSpring() + '/socket';
  title = 'WebSockets chat';
  stompClient;
  tempP: any;
  publications: any;
  jaime = { personne: '' , publication: ''};
  constructor(public pubservice: PublicationServiceProvider, public authservice: AuthServiceProvider,
              public globalService: GlobalServiceProvider) {
    console.log('CURRENT USER', localStorage.getItem('user'));
    this.globalService.setCurrentUser( localStorage.getItem('user'));
    console.log('CURRENT USER', this.globalService.getCurrentUser());
  }

  // INITIALISATION CONNECTION SOCKET
  initializeWebSocketConnection() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/chat/jaime', (message) => {
        if (message.body) {
          // that.globalService.addPersonneConnecte(JSON.parse(message.body));
          // console.log(message.body);
          that.getAllPub();
        }
      });
    });
  }

  // ENVOIE MESSAGE A LA SOCKET
  jaimer(id: any) {
    this.jaime.personne = this.authservice.getMailUser();
    this.jaime.publication = id;
    this.stompClient.send('/app/jaime/jaimer' , {}, JSON.stringify(this.jaime));
  }


  getAllPub() {
    this.pubservice.getPublication(this.authservice.getMailUser())
      .then(data => {
        this.tempP = data;
        this.publications = JSON.parse(this.tempP._body);
        console.log(this.publications);
      });
  }

  commenterPub(pub: any) {
    this.globalService.setIdCurrentPub(pub);
   window.location.href = '';
   // commentpage
  }
  doRefresh(refresher) {
    this.getAllPub();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
  ngOnInit() {
  }

}
