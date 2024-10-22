import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  firebaseAuth = inject(Auth)
  
  register(email:string, username:string, password:string):Observable<void>{
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
    .then(response => updateProfile(response.user, {displayName: username}))

    return from(promise)
  }
  constructor() { }
}
