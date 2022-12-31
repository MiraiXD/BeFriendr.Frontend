import { Component, OnInit } from '@angular/core';
import { UserProfileDto } from '../models/user-profile-dto';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  public userProfile: UserProfileDto;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    const user = this.usersService.currentUser;
    if (user) {
      this.usersService.getUserProfile(user.userName).subscribe(response => {
        this.userProfile = response;
      });
    }
    else {
      console.error('NO USER');
    }


  }

}
