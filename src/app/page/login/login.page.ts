import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/module/user';


import * as firebaseui from 'firebaseui';

import * as firebase from 'firebase';
import { GroceryService } from '../../service/grocery.service';

export class PhoneNumber{
  country:string;
  //area: string;
 // prefix: string;
 // line: string;
 //+ this.area + this.prefix + this.line
  //get e164(){
   //const num = this.country 
    //return '+${num}'
 // }
  
}




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User

 windowRef: any;
 phoneNumber = new PhoneNumber()

 verificationCode: string;
 user1: any;
 provider;
 provider1;
 

constructor(public afAuth: AngularFireAuth, private router: Router,private win: GroceryService) {
   this.provider = new firebase.auth.FacebookAuthProvider();
   this.provider1 = new firebase.auth.TwitterAuthProvider();
}

showPassword(input: any): any {
  input.type = input.type === 'password' ?  'text' : 'password';
 }


 ngOnInit() {

      this.windowRef = this.win.windowRef
      this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

      this.windowRef.recaptchaVerifier.render()

 }


onTwitter(){
  firebase.auth().signInWithRedirect(this.provider1);
  firebase.auth().getRedirectResult().then( result => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    this.router.navigateByUrl('/home')
    // ...
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    });
}




onFacebook(){

  firebase.auth().signInWithRedirect(this.provider);
  firebase.auth().getRedirectResult().then( result => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    this.router.navigateByUrl('/home')
    // ...
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    });
}






 sendLoginCode(){
   const appVerifier = this.windowRef.recaptchaVerifier

   const num = this.phoneNumber.country

   firebase.auth().signInWithPhoneNumber(num, appVerifier)
           .then(result => {

             this.windowRef.confirmationResult = result

           })
           .catch(error => console.log(error))
 }

 verifyLoginCode(){
   this.windowRef.confirmationResult
                 .confirm(this.verificationCode)
                 .then( result => {
                   console.log("login success")

                  this.user1 = result.user1;
                  this.router.navigateByUrl('/home')
                 })
                 .catch( error => console.log(error, "Incorrect code entered?"))
 }

 



async login(user: User){
  try{
   const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
     console.log(result);
     if(result){
      this.router.navigateByUrl("/home");
       this.user.email="";
       this.user.password="";
    }
  }catch(e){
   console.error(e);
  }
 }

 register(){
  this.router.navigateByUrl("/register");
 }


 
}



