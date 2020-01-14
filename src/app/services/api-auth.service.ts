import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http' ;
import {User} from '../bean/User';
import {Profil} from '../bean/Profil';
@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {
  constructor(private http: HttpClient) {

  }


  public  login( user: User) {

    this.http.post<User>('https://pacific-caverns-84912.herokuapp.com/api/login'
      , user
      ,  {observe: 'response', responseType: 'json'}
    ).subscribe(data => {
        if (  data.status === 200 ) {
          localStorage.setItem('token', data.body.token);
          localStorage.setItem('refresh_token', data.body.refresh_token);
          localStorage.setItem('msg' , 'true') ;
          console.log(localStorage.getItem('token') );

          window.location.reload();

        }
      }
    );
  }

  public getProfile( ) {
    // @ts-ignore
    var header = {
      headers: new HttpHeaders().set('Authorization',  ' Bearer ' +   localStorage.getItem('token'))
    }
    this.http.get<Profil>('https://pacific-caverns-84912.herokuapp.com/api/profile'
      , header)
      .subscribe(result => {
        console.log(result.email);
        localStorage.setItem('email' ,result.email);

      });
  }
}
