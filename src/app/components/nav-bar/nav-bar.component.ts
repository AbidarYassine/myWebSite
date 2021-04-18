import {LocalStoragServiceService} from './../../services/local-storag-service.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  colorSelected = '';

  constructor(private localStorageService: LocalStoragServiceService) {
  }

  ngOnInit(): void {
    // this.localStorageService.getColor().subscribe(res => {
    //   this.colorSelected = res;
    // });
    // console.log(this.colorSelected);
  }

}
