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

      return this.http.get<I_Details[]>(this._url+"/details");
  }


  updateUsers(data : any):Observable<I_Details[]>
  {

   let headers = new HttpHeaders();
   var id = data['id']
   delete data['id']

   // alert(JSON.stringify(data))
   headers = headers.set('Content-Type', 'application/json; charset=utf-8');

   return this.http.put<I_Details[]>(this._url+"/details/"+ id+"/", JSON.stringify(data),{
      headers: headers
    });
  }
}

