import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   public users = [];
   public Profile_Image: File;
   public Profile_Video: File;
   public User_id
   public fake_url
  constructor(private detailservice : DetailsService,private router : Router) { }

  ngOnInit() {

      var user = JSON.parse(localStorage.getItem('user'))
      this.User_id = user.id
      this.detailservice.getUsers().subscribe(data => this.users = data);
      document.getElementById("new_image").style.display = "none";
      document.getElementById("old_image").style.display = "block";
  }

  Profile_Image_upload(event) {
    this.Profile_Image  = event.target.files[0]
    document.getElementById("new_image").style.display = "block";
    document.getElementById("old_image").style.display = "none";
     if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.fake_url = event.target.result;
      }
    }
  }


  Profile_Video_upload(event) {

    this.Profile_Video = event.target.files[0]
  }

  update_details(post : any) {

  const uploadData = new FormData();
  uploadData.append('Profile_Image', this.Profile_Image);
  uploadData.append('User_id', this.User_id);
  uploadData.append('First_Name', post['First_Name']);
  uploadData.append('Last_Name', post['Last_Name']);
  uploadData.append('Street_Name', post['Street_Name']);
  uploadData.append('City_Name',post['City_Name']);
  uploadData.append('State_Name',post['State_Name']);
  uploadData.append('Country_Name', post['Country_Name']);
  uploadData.append('PinCode', post['PinCode']);
  uploadData.append('Mobile_Number',post['Mobile_Number']);

  this.detailservice.updateUsers(uploadData).subscribe(data=>console.log('form submitted successfully'))
  this.router.navigate(['/profile'])
}
    Profile()
    {
        this.router.navigate(['/profile']);
    }

}
}