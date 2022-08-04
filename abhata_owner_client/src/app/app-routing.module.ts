import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Screen1Component } from './screen1/screen1.component';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { UsersActionComponent } from './users/users-action/users-action.component';

const routes: Routes = [
  {path:'home', component : HomeComponent},
  {path:'dashboard', component : DashboradComponent},
  {path:'users', component:UsersComponent,
  children:[
    {path:'table', component: UsersTableComponent},
    {path:':action/:id', component: UsersActionComponent},
    {path:'',redirectTo:'table',pathMatch:'full'}
  ]
},
  {path:'screen1', component : Screen1Component},
  {path:'about', component : AboutComponent},
  {path:'login', component : LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
