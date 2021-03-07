import { LocalStoragServiceService } from './../../services/local-storag-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-setting',
  templateUrl: './box-setting.component.html',
  styleUrls: ['./box-setting.component.scss'],
})
export class BoxSettingComponent implements OnInit {
  constructor(private localStorageService:LocalStoragServiceService) {}
  opened=false;
  colors=["#FF9800",'#E91E63','#e910e963','#1ec0e9','#06dd2a']
  colorSelected='';

  ngOnInit(): void {
    this.colorSelected= this.localStorageService.getColor();
  }
  toggleBoxSetting() {
    console.log('hi');
    this.opened=!this.opened;
  }
   getColorSelected(color:any){
     this.colorSelected=color;
     this.localStorageService.setColor(color);
     console.log(color);
  }
}
