import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , AppRoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { AccountComponent } from './account/account.component';


import { UserService } from './user.service';
import { DetailsService } from './details.service';
import { LoginService }  from './login.service';
import { AccountService } from './account.service';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponents,
    DetailsComponent,
    AccountComponent,
    ProfileComponent /* User Defined List in app-routinh.module.ts */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [UserService,DetailsService,LoginService,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
