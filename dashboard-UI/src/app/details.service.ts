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


  updateUsers(post :any , data : any):Observable<I_Details[]>
  {

   let headers = new HttpHeaders();
   var user = JSON.parse(localStorage.getItem('user'))
   var id = user.id

   // console.log(JSON.stringify(data))
   this.http.patch<I_Details[]>(this._url+"/details/"+ id+"/",data, this.getAuthHeaders())
   headers.set('Content-Type', 'application/json; charset=utf-8')
   return this.http.patch<I_Details[]>(this._url+"/details/"+ id+"/",data, this.getAuthHeaders())
  }

     private getAuthHeaders() {
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Authorization': 'Token ' + token});
    return { headers: httpHeaders};
  }
}

