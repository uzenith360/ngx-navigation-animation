import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavigationAnimationComponent } from './navigation-animation/navigation-animation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigationAnimationComponent
  ],
  imports: [
    RouterModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavigationAnimationComponent
  ]
})
export class NgxNavigationAnimationModule { }
