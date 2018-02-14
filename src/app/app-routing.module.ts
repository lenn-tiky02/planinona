import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import {LoginComponent} from './login/login.component';
import {PublicationComponent} from './publication/publication.component';
import {CreationplanComponent} from "./creationplan/creationplan.component";
import {ProfilComponent} from "./profil/profil.component";
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'creationPlan', component: CreationplanComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'publication', component: PublicationComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [  CommonModule,
    RouterModule.forRoot(routes) ],
  declarations: []
})

export class AppRoutingModule { }
