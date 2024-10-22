import { Injectable, inject, signal } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { from } from 'rxjs';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Observable } from 'rxjs';
import { UserInterface } from '../../assets/interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  firebaseAuth = inject(Auth)
  user$ = user(this.firebaseAuth)
  currentUserSignal = signal<UserInterface | null | undefined>(undefined)

  constructor() {}

  /**
   * REGISTER USER
   * @param email 
   * @param username 
   * @param password 
   * @returns 
   */
  register(email:string, username:string, password:string):Observable<void>{
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
    .then(response => updateProfile(response.user, {displayName: username}))
    return from(promise)
  }
  
  /**
   * USER LOGIN
   * @param email 
   * @param password 
   * @returns 
   */
  login(email:string, password:string):Observable<void>{
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth, 
      email, 
      password

    ).then(() => {})
    return from(promise)
  }
}
