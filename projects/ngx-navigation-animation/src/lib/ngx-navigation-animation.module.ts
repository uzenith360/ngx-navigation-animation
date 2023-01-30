import { NgModule } from '@angular/core';
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
  ],
  exports: [
    NavigationAnimationComponent
  ]
})
export class NgxNavigationAnimationModule { }
