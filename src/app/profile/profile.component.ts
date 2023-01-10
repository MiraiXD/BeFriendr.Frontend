import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public isProfileOwner: boolean;
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let userName = this.route.snapshot.paramMap.get('userName');
    if(userName){     
      this.isProfileOwner = this.usersService.isLoggedInAs(userName);
    }
    else console.log('No userName in route');
    
  }

}
