import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './about/about.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { LoginComponent } from './login/login.component';
import { Screen1Component } from './screen1/screen1.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { UsersActionComponent } from './users/users-action/users-action.component';
import { CustomTableComponent } from './shared/custom-table/custom-table.component';
import { DetailTableComponent } from './shared/detail-table/detail-table.component';
import { ActionButtonComponent } from './shared/action-button/action-button.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DashboradComponent,
    LoginComponent,
    Screen1Component,
    UsersComponent,
    UsersTableComponent,
    UsersActionComponent,
    CustomTableComponent,
    DetailTableComponent,
    ActionButtonComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
