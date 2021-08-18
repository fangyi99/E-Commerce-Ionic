import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.page.html',
  styleUrls: ['./forget-pass.page.scss'],
})
export class ForgetPassPage implements OnInit {

  email: string;

  constructor(private fireAuth: AngularFireAuth, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  resetPassword(){
    return this.fireAuth.sendPasswordResetEmail(this.email).then(data => {
      const toast = this.toastController.create({
        message: 'Password reset email sent',
        duration: 2000,
        position: 'bottom'
        }).then(alert => alert.present());
        this.router.navigate(['login']);
    }).catch(err=>{console.log(err)});
  }

}
