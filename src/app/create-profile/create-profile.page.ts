import { Component, OnInit } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router'

import { AlertController} from '@ionic/angular'

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {

  username :string =""
  password :string =""
  cpassword :string =""

  constructor(public afAuth: AngularFireAuth,
              public alert: AlertController,
              public router:Router ) { }

  ngOnInit() {
  }

  async SignIn(){
    const {username,password,cpassword} =this
    if(password!==cpassword){
      this.presentAlert("Error! " ,"Passwords don't match")
      return console.error("Password dont match")
    }

    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username+"@gmail.com", password)
      console.log(res)
      this.presentAlert("Success !" , "welcome aboard")
      this.router.navigate(['/main'])
    }catch(error){
      console.dir(error)
      this.presentAlert("Error", error.message)
    }  
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

}
