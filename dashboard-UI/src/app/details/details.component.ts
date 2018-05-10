import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   public users = [];
   public Profile_Image: File;
   public Profile_Video: File;

  constructor(private detailservice : DetailsService) { }

  ngOnInit() {

      this.detailservice.getUsers().subscribe(data => this.users = data);
  }

  Profile_Image_upload(event) {
    this.Profile_Image  = event.target.files[0]
  }


  Profile_Video_upload(event) {

    this.Profile_Video = event.target.files[0]
  }

  update_details(post : any) {

  //   console.log(this.Profile_Image);
  //   post['Profile_Image'] = this.Profile_Image

  //   this.detailservice.updateUsers(post).subscribe(data => {
  //     console.log('form submitted successfully');
  //   });
  // }

  const uploadData = new FormData();
  uploadData.append('Profile_Image', this.Profile_Image, this.Profile_Image.name);
  this.detailservice.updateUsers(post,uploadData).subscribe(data=>console.log('Form submitted Successfully'))



}
