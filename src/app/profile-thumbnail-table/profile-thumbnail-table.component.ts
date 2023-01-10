import { Component, Input, OnInit } from '@angular/core';
import { ProfileThumbnailDto } from '../models/profile-thumbnail-dto';

@Component({
  selector: 'app-profile-thumbnail-table',
  templateUrl: './profile-thumbnail-table.component.html',
  styleUrls: ['./profile-thumbnail-table.component.css']
})
export class ProfileThumbnailTableComponent implements OnInit {
  @Input() public width: number = 1;
  @Input() public height: number = 1;
  @Input() public friendsCount: number = 1;
  @Input() public users: ProfileThumbnailDto[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
