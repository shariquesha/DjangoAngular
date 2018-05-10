import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http'
import { Router, Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 public users = [];
  constructor(private loginservice : UserService , private router : Router) { }

  ngOnInit() {
  }

  add(post : any) {
    this.loginservice.postUsers(post).subscribe(
        response => {
          this.router.navigate(['/login']);
        },
        error => {
            console.log('error',error);
        }
        );
  }
}
