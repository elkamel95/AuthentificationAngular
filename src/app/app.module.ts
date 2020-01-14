import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {User} from './bean/User';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login' , component: LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [
    User],
  bootstrap: [AppComponent]
})

export class AppModule { }
