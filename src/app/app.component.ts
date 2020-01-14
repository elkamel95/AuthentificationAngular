import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  public loginLogout: string = 'login' ;
  public email :string ;
  sessionClient: any ;
  title = 'Nexus-WayModuleLogin';
  constructor()  {


  }

  ngOnInit(): void {
   this.sessionClient = localStorage.getItem('token');
   if (  this.sessionClient  != null ) {
     this.email = localStorage.getItem('email')
       this.loginLogout = 'logout' ;
    } else {
      this.loginLogout = 'login' ;

    }
  }

  logout() {

    if (  this.sessionClient != null ) {
      localStorage.clear();
      localStorage.setItem('msg', 'false');
      window.location.reload();
    }
}
}
