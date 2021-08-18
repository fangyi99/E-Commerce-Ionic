import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean;
  authState: any = null;

  constructor(private fireAuth: AngularFireAuth, private toastController: ToastController,
    private router: Router, private googlePlus: GooglePlus, private userService: UserService) {
    }

    isLoggedIn(){
      //check session storage if user is still logged in
      if(sessionStorage.getItem('user') != null){
        //user is logged in
        this.loggedIn = true;
      }
      else{
        //user is not logged in
        this.loggedIn = false;
      }
      return this.loggedIn;
    }

    register(email, password) {
      return this.fireAuth.createUserWithEmailAndPassword(email, password)
       .then(() => {
        this.userService.addUser();
      const toast = this.toastController.create({
      message: 'Registeration successful!',
      duration: 3000,
      position: 'bottom'
      }).then(alert => alert.present());
      this.router.navigate(['login']);
      }).catch((error) => {
        const toast = this.toastController.create({
          message: error,
          duration: 3000,
          position: 'bottom'
          }).then(alert => alert.present());
      })
    }

    login(email, password) {
      return this.fireAuth.signInWithEmailAndPassword(email, password)
      .then(async (user) => {
        if (user) {
          const toast = this.toastController.create({
          message: 'Login successful!',
          duration: 2000,
          position: 'bottom'
          }).then(alert => alert.present());
          sessionStorage.setItem('user', (await this.fireAuth.currentUser).uid);
          this.router.navigate(['']).then(()=>
          {
            location.reload();
          });
        }
      }).catch((error) => {
        const toast = this.toastController.create({
          message: error,
          duration: 3000,
          position: 'bottom'
          }).then(alert => alert.present());
      })
    }

    async googleLogin(){
      await this.googlePlus.login({
        'webClientId': '23494896481-3al1nj12mr6ad7gnntj2fill14fvtp6k.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })
      .then(res => {
        const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.idToken, res.accessToken);
        this.fireAuth.signInWithCredential(googleCredential).then(async res =>{
          this.userService.addUser();
          const toast = this.toastController.create({
            message: 'Login successful!',
            duration: 2000,
            position: 'bottom'
            }).then(alert => alert.present());
            sessionStorage.setItem('user', (await this.fireAuth.currentUser).uid);
            this.router.navigate(['']).then(()=>
            {
              location.reload();
            });
        }).catch((error) => {
          const toast = this.toastController.create({
            message: error,
            duration: 3000,
            position: 'bottom'
            }).then(alert => alert.present());
        })
    })
  }

    getUserId(){
      return sessionStorage.getItem("user");
    }
    
    logout() {
      return this.fireAuth.signOut().then(() => {
        sessionStorage.removeItem('user');
        location.reload();
         const toast = this.toastController.create({
          message: 'Logout successful!',
          duration: 2000,
          position: 'bottom'
          }).then(alert => alert.present());
      });
    }
}