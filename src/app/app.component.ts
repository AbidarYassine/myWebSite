import {Component, OnInit} from '@angular/core';
import {LocalStoragServiceService} from './services/local-storag-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private localStorageService: LocalStoragServiceService) {
  }

  title = 'Abidar Yassine';
  bounce: any;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  // }
}
