import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide =true;

  form = new FormGroup ( {
    name: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(){
    console.log(this.form.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
