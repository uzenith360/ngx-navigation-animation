import { Component } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
    selector: 'ngx-navigation-animation',
    templateUrl: './navigation-animation.component.html',
    styleUrls: ['./navigation-animation.component.css'],
    imports: [MatProgressBar, MatProgressSpinner]
})
export class NavigationAnimationComponent {

}
