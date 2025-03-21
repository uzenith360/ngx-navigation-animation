import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { NgxNavigationAnimationModule } from 'ngx-navigation-animation';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(NgxNavigationAnimationModule, BrowserModule, AppRoutingModule),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
