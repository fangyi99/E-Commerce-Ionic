import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  user: any;
  username: any = '';
  img: any = 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png';

  constructor(private authService: AuthService, private authGuard: AuthGuard, private userService: UserService) {
   }

  ngOnInit() {
    this.userService.getUser(this.authService.getUserId()).subscribe(result => {
      this.user = result;
      if(this.user.photo!=null){
        this.img = this.user.photo;
      }
      if(this.user.username!=null){
        this.username = this.user.username;
      }
    })
  }

}
