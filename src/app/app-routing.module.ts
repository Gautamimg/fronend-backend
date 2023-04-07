import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { GuardAuthguradGuard } from './guard-authgurad.guard'
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'home',component:HomeComponent,canActivate:[GuardAuthguradGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
