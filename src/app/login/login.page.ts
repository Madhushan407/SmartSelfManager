import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username : string=""
  password :string = ""

  constructor(
    private router:Router,
    public afAuth:AngularFireAuth,
    public alert: AlertController
  ) { 
    
  }

  ngOnInit() {
  }

  async gotoMainPage(){

    const { username ,password } = this

    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username +"@gmail.com",password)
      console.log(res)
      this.presentAlert("Success !" , "Welcome to Smart Selft Manager")
      this.router.navigate(['/main'])
    }catch(err){
      console.dir(err)
      if(err.code === "auth/user-not-found"){
        console.log("User not found")
      }
     // this.presentAlert("Error", err.message)
    } 
  }


  async gotoRegisterPage(){
    this.router.navigate(['/create-profile']);
  }

  async presentAlert(header:string,message:string){
    //async pAlert(header:string, message: string){
      const alert =await this.alert.create({
        header,
        message,
        buttons:["Ok"]
      });
  
      await alert.present();
      }


  // gotoMainPage(){
  //   this.router.navigate(['main']);
  // }

}
