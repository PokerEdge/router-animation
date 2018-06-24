import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

// TODO: Animate the hero area only and generate styles with boolean attributes
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateX(100%) rotate(0deg)'
              }),
              animate(
                // '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
                '0.55s cubic-bezier(.35,-0.41,.7,1.47)',
                style({ opacity: 1, transform: 'translateX(0) rotate(0)' })
              ),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [animate('0.55s', style({ opacity: 0 })), animateChild()],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class AppComponent {

  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'one';
  }
}
