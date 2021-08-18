import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      'email': '',
      'password': ''
      });
   }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }


}
