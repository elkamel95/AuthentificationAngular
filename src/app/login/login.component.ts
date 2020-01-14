import {Component, OnInit} from '@angular/core';
import { FormGroup, Validators , FormBuilder } from '@angular/forms';
import { ApiAuthService} from '../services/api-auth.service';
import {Router} from '@angular/router';
import {User} from '../bean/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForms: FormGroup;
    ngOnInit(): void {
    }
  user : User ;
  emailUsre : string ;
  msg  = 'false' ;
  constructor(private fb: FormBuilder , private  router: Router , private api: ApiAuthService)
{
  this.msg = localStorage.getItem('msg');

  this.createForms();

}
login( email: string , password: string){
 this.user = new  User () ;
 this.user.email = email;
 this.user.password = password ;

 console.log(this.user);
  this.api.login(this.user);
 this.api.getProfile();
 this. emailUsre = localStorage.getItem('email');

}
  createForms() {
    this.angForms = this.fb.group({
      pass: ['', Validators.required],
      email : [null,  [Validators.email, Validators.required]],

    });
  }
}
