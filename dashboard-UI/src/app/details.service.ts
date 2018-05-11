import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { I_Details } from './details';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class DetailsService {

  private _url: string = "http://127.0.0.1:8000"

  constructor(private http : HttpClient) { }

  getUsers():Observable<I_Details[]>
  {
      var user = JSON.parse(localStorage.getItem('user'))
      var id = user.id
      return this.http.get<I_Details[]>(this._url+"/details/"+id+"/", this.getAuthHeaders());
  }


  updateUsers(data : any):Observable<I_Details[]>
  {
   var user = JSON.parse(localStorage.getItem('user'))
   
   var id = user.id

   
  //  try {
  //   this.http.post<I_Details[]>(this._url+"/details/",data, this.getAuthHeaders());
  //   }
  // catch(err) {
  //  this.http.put<I_Details[]>(this._url+"/details/"+id+"/",data, this.getAuthHeaders());
  // }


   return this.http.put<I_Details[]>(this._url+"/details/"+id+"/",data, this.getAuthHeaders());
}
   getAuthHeaders()
   {
      const token = localStorage.getItem('token');
      let headers = new HttpHeaders({

        'Authorization':'Token ' + token,
        "Access-Control-Allow-Methods":"GET,HEAD,POST,DEBUG,PUT,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Origin":"*"
      })

      return  {headers: headers}


   }
}