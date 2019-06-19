import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private firebaseService:  FirebaseService, private angularRouter: Router) { }

  ngOnInit() {
  }


  async login(){
      const loggedIn: boolean = await this.firebaseService.login();
      if (loggedIn) {
        this.angularRouter.navigateByUrl("/home");
      }    
  }

  async loginEmail(){
    const loggedIn: boolean = await this.firebaseService.loginEmail(this.email, this.password);
      if (loggedIn) {
        this.angularRouter.navigateByUrl("/home");
      }else{
        this.firebaseService.presentToast("First you need to signed-up");
      }
  }

  async signeup(){
    const loggedIn: boolean = await this.firebaseService.createUser(this.email, this.password);
    if (loggedIn) {
      this.angularRouter.navigateByUrl("/home");
    }else{
      this.firebaseService.presentToast("error");
    }
  }

  onChangeEmail(event){
    console.log(event.target.value);
    this.email = event.target.value;
  }

  onChangePassword(event){
    console.log(event.target.value);
    this.password = event.target.value;
  }

  logout(){
    this.firebaseService.logout();
  }

}
