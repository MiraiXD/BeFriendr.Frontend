import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map } from 'rxjs';
import { RegisterResponse } from 'src/app/serverResponses/registerResponse';
import { LoginResponse } from 'src/app/serverResponses/loginResponse';
import { User } from 'src/app/models/user';
import { GetProfileResponse } from 'src/app/serverResponses/getProfileResponse';
import { UserProfileDto } from 'src/app/models/user-profile-dto';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private _currentUserProfile: UserProfileDto;
  constructor(private http: HttpClient) { }


  public get currentUser(): User | null {
    //return this.currentUserSubject.getValue();
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user) as User;
    }
    else return null;
  }
  public get currentUserProfile(): UserProfileDto | null {
    return this._currentUserProfile;
  }
  getUserProfile(userName: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.currentUser?.token
      })
    };
    return this.http.get<GetProfileResponse>(environment.networkUrl + userName, httpOptions).pipe(      
      map((response) => {        
        this._currentUserProfile = response.userProfileDto;
        return response.userProfileDto;
      })
    );
  }
  register(user: any) {
    return this.http.post<RegisterResponse>(environment.authUrl + 'register', user).pipe(
      map((response) => {
        const user = Object.assign(new User(),
          {
            userName: response.userName,
            email: response.email,
            token: response.token,
          });
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
      })
    );
  }

  login(user: any) {
    return this.http.post<LoginResponse>(environment.authUrl + 'login', user).pipe(
      map((response) => {
        const user = Object.assign(new User(),
          {
            userName: response.userName,
            email: response.email,
            token: response.token,
          });
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
  isLoggedIn(): boolean{
    if(this.currentUser) return true;
    else return false;
  }
  isLoggedInAs(userName: string): boolean{
    if(this.currentUser && this.currentUser.userName === userName) return true;
    else return false;
  }
}
