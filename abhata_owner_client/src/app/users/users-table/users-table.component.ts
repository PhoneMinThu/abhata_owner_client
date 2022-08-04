import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { UsersTableService } from 'src/app/services/users-table-service/users-table.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  constructor(
    private usersTableService:UsersTableService,
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get():void{
    this.usersTableService.get()
    .subscribe((res)=>{
      this.dataSource.data = res;
      console.log(this.dataSource)
    })
  }

}
