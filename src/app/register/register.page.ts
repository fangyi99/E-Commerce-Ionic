import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      'email': '',
      'password': ''
      });
   }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.registerForm.value.email, this.registerForm.value.password);
    }

}
