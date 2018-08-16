import {AfterViewInit, Component, HostBinding, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime
} from 'rxjs/operators';
import {fromEvent} from "rxjs/index";

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  animations: [
    trigger('header_toggle', [
      state('header_hide',
        style({ opacity: 0, transform: 'translateY(20%)' })
      ),
      state('header_show',
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ]),

    trigger('footer_toggle', [
      state('footer_hide',
        style({ opacity: 0, transform: 'translateY(20%)' })
      ),
      state('footer_show',
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class RootComponent implements OnInit, AfterViewInit  {
  public scroll$: any;
  public scrollUp$: any;
  public scrollDown$: any;

  constructor() { }

  ngOnInit() {
  }
  isVisible = 'header_hide';

  ngAfterViewInit() {
     this.scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    this.scrollUp$ = this.scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    this.scrollDown$ = this.scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    this.scrollUp$.subscribe(() => (this.isVisible = 'header_hide'));
    this.scrollDown$.subscribe(() => (this.isVisible = 'header_show'));
  }

}
