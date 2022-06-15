import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'sigin', component:SiginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent = {HomeComponent, LoginComponent, SiginComponent};
