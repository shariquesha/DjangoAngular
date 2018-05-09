import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users = [];
  public islogin = false;
  constructor(private loginservice : LoginService) { }

  ngOnInit() {
  }

  loginClicked(data : any){

      this.loginservice.loginUsers(data);
  }

}
