import { LocalStoragServiceService } from './../../services/local-storag-service.service';
import { Component, OnInit } from '@angular/core';

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
    this.localStorageService.getColor().subscribe(res => {
      this.colorSelected = res;
    });

    this.localStorageService.subjectColor.subscribe(color => {
      console.log(color);
      if (!color) {
        this.colorSelected = '#0a0ac1';
      } else {
        this.colorSelected = color;
      }
    });

  }

}
