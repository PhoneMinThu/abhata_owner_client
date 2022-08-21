import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UsersTableService } from 'src/app/services/users-table-service/users-table.service';
import { Observable } from 'rxjs';

export const userColumnsDef=[
  {columnDef:'id',header:'ID'},
  {columnDef:'name',header:'Name'},
  {columnDef:'phone_number',header:'Phone Number'},
  {columnDef:'user_points',header:'User Points'},
  {columnDef:'user_address',header:'User Address'},
  {columnDef:'user_latlng',header:'User Lat-Lng'},
  {columnDef:'profile_image_url',header:'Profile Image Url'},
  {columnDef:'contact_list',header:'Contact List'},
]

export interface userTableInterface{
  id:number;
  name:string;
  phone_number:string;
  user_point:number;
  user_address:string;
  user_latlng:{lat:number,lng:number};
  profile_image_url:string;
  columnDef:contact_list[];
}

export interface contact_list{
  contact_id:number;
  contact_name:string;
  contact_phont_number:string;
  contact_address:string;
  contact_latlng:{lat:number;lng:number};
}

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit,AfterViewInit {

  dataSource = new MatTableDataSource<userTableInterface>();
  dataSet!:Observable<any[]>;
  columns:any[]=[];
  displayedColumns:any[]=[];

  constructor(
    private usersTableService:UsersTableService,
  ){
  }

 ngOnInit(): void {

  this.columns = userColumnsDef;

  this.displayedColumns = this.displayedColumns.concat(this.columns.map(x=>x.columnDef));

  this.dataSet = this.usersTableService.get();

 }

 ngAfterViewInit(): void {
   
 }

 
}
