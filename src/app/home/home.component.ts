import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginUser: any = {
    userName: '',
    password: '',
  }
  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
  }
  register(){
    this.router.navigateByUrl('register');
  }
  login(){
    this.usersService.login(this.loginUser).subscribe(
      response=>{
        if(this.usersService.isLoggedInAs(this.loginUser.userName)){
          this.router.navigate(['/users', this.loginUser.userName]);
        }
        else{
          console.error('LOGIN FAILED');
        }
      }
    )
  }

}
