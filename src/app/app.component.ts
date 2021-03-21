import {Component, OnInit} from '@angular/core';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolioWebSite';
  bounce: any;

  ngOnInit(): void {
    AOS.init();
  }

  // tslint:disable-next-line:typedef
  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  // }
}
