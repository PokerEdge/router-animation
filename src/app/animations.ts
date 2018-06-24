import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

// Component transition animations
export const slideInDownAnimation =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);

/*
Imports the animation symbols that build the animation triggers, control state,
and manage transitions between states.

Exports a constant named slideInDownAnimation set to an animation trigger named
routeAnimation; animated components will refer to this name.

Specifies the wildcard state , *, that matches any animation state that the route
component is in.

Defines two transitions, one to ease the component in from the left of the screen
as it enters the application view (:enter), the other to animate the component down
as it leaves the application view (:leave).
*/
