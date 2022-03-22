import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new UserLogin("", "")

  onSubmit() {
    console.log(this.userModel)
  }

}
