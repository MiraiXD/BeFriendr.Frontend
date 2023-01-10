import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { UserProfileDto } from '../models/user-profile-dto';
import { RelationshipStatus } from '../models/user-profile-dto';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  public userProfile: UserProfileDto;
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const userName = this.route.snapshot.paramMap.get('userName');
    //const userName = this.route.params.subscribe
    if (userName) {
      console.log('GET USER PROFILE Username: ' + userName);
      this.usersService.getUserProfile(userName).subscribe(response => {
        this.userProfile = response;
      },
        error => {
          console.error('Error getting profile ${user.userName} ' + error);
        }
      );
    }
    else{
      console.error('No userName found');
    }
  }

}
