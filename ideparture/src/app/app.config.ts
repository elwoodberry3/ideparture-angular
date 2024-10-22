import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp } from '@angular/fire/app';
import { getAuth } from '@angular/fire/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuS4UEYTN_pzvWPCG7w59KPI8qfP_GeEo",
  authDomain: "ideparture.firebaseapp.com",
  projectId: "ideparture",
  storageBucket: "ideparture.appspot.com",
  messagingSenderId: "256776269831",
  appId: "1:256776269831:web:5805a5c88ef396d94f3aa2"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),  // Directly provide Firebase app here
    provideAuth(() => getAuth())  // Directly provide Auth here
  ],
};
