import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx'
import { LoadingController } from '@ionic/angular';
import firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any;
  updateForm: FormGroup;
  imgURL: any = "https://freerangestock.com/sample/120213/camera-vector-icon.jpg";
  imgRef: any;
  loading: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, 
    private userService: UserService, private router: Router, private camera: Camera, 
    private loadingCtrl: LoadingController) {

      this.updateForm = formBuilder.group({
        'username': '',
        'email': '',
        'mobile': '',
        'password': ''
      });
  }

  ngOnInit() {
    //get user id from auth service
    let id = this.authService.getUserId();

    //retrieve user data from user service
    this.userService.getUser(id).subscribe(result => {
      this.user = result;
      this.user.id = id;

      //populate form with user information
      this.updateForm.controls.username.setValue(this.user.username);
      this.updateForm.controls.email.setValue(this.user.email);
      this.updateForm.controls.mobile.setValue(this.user.mobile);
    })
    }

   updateAccount(){
    var credentials: any;
    credentials = {
      'photo': this.imgURL,
      'username': this.updateForm.value.username,
      'email': this.updateForm.value.email,
      'mobile': this.updateForm.value.mobile,
      'password': this.updateForm.value.password
    }

     this.userService.updateUser(this.user.id, credentials);
     this.router.navigate(['tabs/tab4']);
   }

    takePicture(){
      const options = {
        quality:100,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: false,
        targetHeight:500,
        targetWidth:500
      }
      this.camera.getPicture(options).then((imageData)=>{
        this.imgRef = this.dataURLtoBlob('data:image/jpeg;base64,'+ imageData);
        this.uploadPicture();
      },(err)=>{
        console.log(err);
      }
      );
    }

    dataURLtoBlob(dataURL){
      let binary = atob(dataURL.split(',')[1]);
      let array = [];
      for(let i=0; i<binary.length; i++){
        array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
    }

    async uploadPicture(){
      this.loading = await this.loadingCtrl.create({
        message:'Uploading...'
      });
      await this.loading.present();

      if(this.imgRef){
        var uploadTask = firebase.storage().ref().child('pic.png')
        .put(this.imgRef);
        uploadTask.then( snapshot =>
          {
            snapshot.ref.getDownloadURL().then((downloadURL)=>{
              console.log("downloadURL: ", downloadURL);
              this.imgURL = downloadURL;
              this.loading.dismiss();
            });
          }
        );
        (err)=>{
          console.log(err);
        }
      }
    }

}

