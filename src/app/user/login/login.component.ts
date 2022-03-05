import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showAlert = false;
  alertMsg = 'Please wait! Your account is being created';
  alertColor = 'blue';

  credentials = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  login() {
    console.log(this.credentials)
  }
  
}
