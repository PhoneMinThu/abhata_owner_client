import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  visible:string='password'
  toggle() {
    if (this.visible=='password') {
      this.visible='text'
    } else {
      this.visible='password'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
