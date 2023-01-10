import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerUser : any = {};
  birthDate = new Date();
  minAgeToRegister = 18;

  datePickerConfig: Partial<BsDatepickerConfig>;

  userNameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);
  confirmPasswordControl = new FormControl('', this.comparePasswords(this.passwordControl))
  firstNameControl = new FormControl('', Validators.required);
  lastNameControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  birthDateControl = new FormControl(this.birthDate, [this.checkAgeOver(this.minAgeToRegister)]);
  genderControl = new FormControl('', Validators.required);

  constructor(private usersService: UsersService, private router: Router) {
    const now = new Date();
    const minDate = new Date();
    minDate.setFullYear(now.getFullYear() - 100);
    const maxDate = new Date();

    this.datePickerConfig = {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      value: now,
      minDate: minDate,
      maxDate: maxDate,
      dateInputFormat: 'DD/MM/YYYY'
    };
  }

  ngOnInit() {
  }
  onDateChange(date: Date) {
    this.birthDate = date;
    this.registerUser.birthDate = date;
  }
  register() {
    this.usersService.register(this.registerUser).subscribe(
      response=>{
        let user = this.usersService.currentUser;
        if(user && user.userName === this.registerUser.userName){
          this.router.navigate(['/users', user.userName]);
        }
      },
      error =>{
        console.log(error);
      }
    )
  }
  comparePasswords(matchingControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value != matchingControl.value)
        return {
          isMatching: false
        }
      else return null;
    }
  }
  checkAgeOver(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.getAgeFromDates(this.birthDate, new Date()) < minAge) {
        return {
          isUnderage: true
        };
      }
      else return null;
    }
  }
  getAgeFromDates(earlierDate: Date, laterDate: Date) {
    var age = laterDate.getFullYear() - earlierDate.getFullYear();
    var month = laterDate.getMonth() - earlierDate.getMonth();
    if (month < 0 || (month === 0 && laterDate.getDate() < earlierDate.getDate())) {
      age--;
    }
    return age;
  }
}
