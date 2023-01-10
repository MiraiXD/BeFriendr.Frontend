import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserProfileDto } from '../models/user-profile-dto';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  // @Input() public userProfile = new UserProfileDto({    
  //   firstName: 'Jeży',
  //   lastName: 'Jeżewski',
  //   userName: 'SpikyBoy11',
  //   mainPhotoUrl: 'https://res.cloudinary.com/dvsxcbmfs/image/upload/v1667904508/xkrzwaqwm7tjqa1py6dt.webp',    
  //   selectedFriends: [],
  // });
  public userProfile: UserProfileDto;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    const user = this.usersService.currentUser;
    if (user) {
      console.log('GET USER PROFILE');
      this.usersService.getUserProfile(user.userName).subscribe(response => {
        this.userProfile = response;
      },
        error => {
          console.error('Error getting profile ${user.userName} ' + error);
        }
      );
    }
    else {
      console.error('NO USER');
    }
  }

}
