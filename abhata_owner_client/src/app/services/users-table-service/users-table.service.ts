import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpService } from '../http-service/http.service';


@Injectable({
  providedIn: 'root'
})
export class UsersTableService {


  URL:string = 'usersTable.json';

  constructor(
    private httpService:HttpService
  ) { }

  get():Observable<any[]>{
    return this.httpService.get(this.URL);
  }

}
