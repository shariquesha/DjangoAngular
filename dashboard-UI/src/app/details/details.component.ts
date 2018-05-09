import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   public users = [];
  constructor(private detailservice : DetailsService) { }

  ngOnInit() {

      this.detailservice.getUsers().subscribe(data => this.users = data);
  }

  add(post : any) {
    this.detailservice.updateUsers(post).subscribe(data => console.log('form submitted successfully'));
    
}

}
