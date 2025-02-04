import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ProfileComponent} from "./profile/profile.component";



export const routes: Routes = [
  {path :'home', component :HomeComponent},
  { path:'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent},
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: '**', component: HomeComponent}
];
