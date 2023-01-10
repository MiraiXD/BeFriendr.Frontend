import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUsernameGuard } from './guards/auth-username.guard';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {
    path: 'users/:userName',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
