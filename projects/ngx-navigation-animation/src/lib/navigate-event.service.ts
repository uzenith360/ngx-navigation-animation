import { Injectable } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationEnd, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigateEventService {
  // Observable string sources
  private NavigationSource = new Subject<string>();
  private NavigationStartSource = new Subject<string>();
  private NavigationStopSource = new Subject<string>();

  // Observable string streams
  navigation$ = this.NavigationSource.asObservable();
  navigationStart$ = this.NavigationStartSource.asObservable();
  navigationStop$ = this.NavigationStopSource.asObservable();

  constructor(private router: Router) {
    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationEnd) {
            this.NavigationSource.next(JSON.stringify(event));
          } else if (event instanceof NavigationStart) {
            this.NavigationStartSource.next(JSON.stringify(event));
          }

          if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
            this.NavigationStopSource.next(JSON.stringify(event));
          }
        });
  }
}
