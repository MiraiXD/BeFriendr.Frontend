import { Component, Input, OnInit } from '@angular/core';
import { UserProfileDto } from '../models/user-profile-dto';
import { ProfileThumbnailDto } from '../models/profile-thumbnail-dto';

@Component({
  selector: 'app-profile-thumbnail',
  templateUrl: './profile-thumbnail.component.html',
  styleUrls: ['./profile-thumbnail.component.css']
})
export class ProfileThumbnailComponent implements OnInit {
  @Input() public userProfile: ProfileThumbnailDto;
  constructor() { }

  ngOnInit(): void {
  }

}
