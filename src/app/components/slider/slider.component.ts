import {LocalStoragServiceService} from './../../services/local-storag-service.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  colorSelected = '';

  constructor(private localStorageService: LocalStoragServiceService) {
  }

  ngOnInit(): void {
    this.localStorageService.getColor().subscribe(res => {
      this.colorSelected = res;
    });
    console.log(this.colorSelected);
  }

}
