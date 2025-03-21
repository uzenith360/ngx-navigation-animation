import { Component } from '@angular/core';
import { fadeAnimation, NavigateEventService, NgxNavigationAnimationModule } from 'ngx-navigation-animation';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [fadeAnimation],
    imports: [NgIf, NgxNavigationAnimationModule, RouterOutlet]
})
export class AppComponent {
  public isPageLoading: boolean = false;
  public page: string = document.location.pathname;
  public title = 'ngx-navigation-animation-example-app';

  private navigateEventServiceSubscription!: Subscription;
  private navigateEventServiceStartSubscription!: Subscription;
  private navigateEventServiceStopSubscription!: Subscription;

  constructor(private navigateEventService: NavigateEventService,){
    this.navigateEventServiceSubscription = this.navigateEventService.navigation$.subscribe(
      (navigation) => {
        this.page = /*JSON.parse(navigation).url*/document.location.pathname;
      }
    );

    this.navigateEventServiceStartSubscription = this.navigateEventService
      .navigationStart$
      .subscribe(
        (navigation) => {
          this.isPageLoading = true;
        }
      );

    this.navigateEventServiceStopSubscription = this.navigateEventService
      .navigationStop$
      .subscribe(
        (navigation) => {
          setTimeout(() => {
            this.isPageLoading = false;
          }, 0);
        }
      );
  }

  public getRouterOutletState(outlet: { isActivated: any; activatedRoute: any; }): void {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnDestroy(): void {
    if (this.navigateEventServiceSubscription) {
      this.navigateEventServiceSubscription.unsubscribe();
    }

    if (this.navigateEventServiceStartSubscription) {
      this.navigateEventServiceStartSubscription.unsubscribe();
    }

    if (this.navigateEventServiceStopSubscription) {
      this.navigateEventServiceStopSubscription.unsubscribe();
    }
  }
}
