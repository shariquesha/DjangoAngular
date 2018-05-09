import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { IAccount } from './account';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {
 private _url: string = "http://127.0.0.1:8000"

  constructor(private http : HttpClient) { }

  getAccount():Observable<IAccount[]>
  {

      return this.http.get<IAccount[]>(this._url+"/users");
  }


  updateAccount(data : any):Observable<IAccount[]>
  {

   let headers = new HttpHeaders();
   var id = data['id']
   delete data['id']

   alert(JSON.stringify(data))
   headers = headers.set('Content-Type', 'application/json; charset=utf-8');

   return this.http.put<IAccount[]>(this._url+"/users/", JSON.stringify(data),{
      headers: headers
    });
  }
}
