import { LocalStoragServiceService } from './../../services/local-storag-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  colorSelected="";
  constructor(private localStorageService:LocalStoragServiceService) { }

  ngOnInit(): void {
    this.colorSelected=this.localStorageService.getColor();
    console.log(this.colorSelected);
  }

}
