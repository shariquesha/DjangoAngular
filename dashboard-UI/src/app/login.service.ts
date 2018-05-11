import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { IUser } from './user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

private _url: string = "http://127.0.0.1:8000"

  constructor(private http : HttpClient) { }

   loginUsers(data : any):Observable<IUser[]>
  {
    // alert(JSON.stringify(data));

   let headers = new HttpHeaders();
   headers = headers.set('Content-Type', 'application/json; charset=utf-8');
   return this.http.post<IUser[]>(this._url+"/authenticate",data,{
      headers: headers
    });
  }

}
