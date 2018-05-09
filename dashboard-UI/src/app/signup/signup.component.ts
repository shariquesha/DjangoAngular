import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 public users = [];
  constructor(private loginservice : UserService) { }

  ngOnInit() {
  }

  add(post : any) {
    this.loginservice.postUsers(post).subscribe(data => console.log('form submitted successfully'));
     // alert(JSON.stringify(post));
  }

  // refresh(){
  //   this.ngOnInit()
  // }
}
