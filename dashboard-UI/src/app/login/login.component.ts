import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users = [];
  public islogin = false;
  constructor(private loginservice : LoginService,private router : Router) { }

  ngOnInit() {

    if(localStorage.getItem('token') &&
       localStorage.getItem('account'))
    {
      this.router.navigate(['/details'])
    }
  }

  loginClicked(data : any){
      alert(JSON.stringify(data))
      this.loginservice.loginUsers(data).subscribe(
        response => {
          localStorage.setItem('token',response['token']);
          localStorage.setItem('user',JSON.stringify(response['user']));
          this.router.navigate(['/details']);
        },
        error => {
            console.log('error',error);
        }
        );
  }

}
