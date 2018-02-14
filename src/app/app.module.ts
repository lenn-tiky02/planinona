import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {MembreService} from '../services/membre.service';
import { GlobalServiceProvider } from '../services/global.service';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PublicationComponent } from './publication/publication.component';
import { InvitationComponent } from './invitation/invitation.component';
import { ProfilComponent } from './profil/profil.component';
import { CreationplanComponent } from './creationplan/creationplan.component';
import {AuthServiceProvider} from "../services/auth.service";
import {AdresseServiceProvider} from "../services/adresse.service";
import {InteretServiceProvider} from "../services/interet.service";
import {PublicationServiceProvider} from "../services/publication.service";
import {CommentaireServiceProvider} from "../services/commentaire.service";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PublicationComponent,
    InvitationComponent,
    ProfilComponent,
    CreationplanComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MembreService,
    AuthServiceProvider,
    AdresseServiceProvider,
    InteretServiceProvider,
    PublicationServiceProvider,
    GlobalServiceProvider,
    CommentaireServiceProvider,
    GlobalServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
