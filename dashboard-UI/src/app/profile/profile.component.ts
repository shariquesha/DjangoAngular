import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router, Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   public users = [];
   public User_id
   
  constructor(private detailservice : DetailsService,private router : Router) { }

   ngOnInit() {

      var user = JSON.parse(localStorage.getItem('user'))
      this.User_id = user.id
      this.detailservice.getUsers().subscribe(data => this.users = data);
  }

  logoutUser()
  {
    localStorage.clear()
    this.router.navigate(['/login']);
  }
  updateProfile()
  {
    this.router.navigate(['/details']);
  }
}
