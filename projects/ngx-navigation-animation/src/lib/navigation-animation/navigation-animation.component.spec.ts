import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NavigationAnimationComponent } from './navigation-animation.component';

describe('NavigationAnimationComponent', () => {
  let component: NavigationAnimationComponent;
  let fixture: ComponentFixture<NavigationAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationAnimationComponent ],
      imports:[MatProgressBarModule, MatProgressSpinnerModule],
      providers:[
        // { provide: MatProgressBar, useValue: {} },
        // { provide: MatProgressSpinner, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
