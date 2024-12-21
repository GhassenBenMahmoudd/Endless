import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { FacebookAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>
  

  constructor(private fa:AngularFireAuth) { 
    this.user=this.fa.user
  }

  signUp(email,password){
   return this.fa.createUserWithEmailAndPassword(email,password)
  }
  signIn(email,password){
    return this.fa.signInWithEmailAndPassword(email,password)
  }


  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.fa
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
 
}
