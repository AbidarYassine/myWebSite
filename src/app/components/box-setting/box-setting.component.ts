import {LocalStoragServiceService} from './../../services/local-storag-service.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-box-setting',
  templateUrl: './box-setting.component.html',
  styleUrls: ['./box-setting.component.scss'],
})
export class BoxSettingComponent implements OnInit {
  constructor(private localStorageService: LocalStoragServiceService) {
  }

  opened = false;
  colors = ['#0a0ac1', '#f5aa21', '#ab0606', '#139908'];
  colorSelected = '';

  ngOnInit(): void {
    // this.localStorageService.getColor().subscribe(res => {
    //   this.colorSelected = res;
    // });
  }

  // tslint:disable-next-line:typedef
  toggleBoxSetting() {
    console.log('hi');
    this.opened = !this.opened;
  }

  // tslint:disable-next-line:typedef
  getColorSelected(color: any) {
    // this.localStorageService.setColor(color).subscribe(res => {
    //   console.log(res);
    //   this.colorSelected = color;
    // });
  }
}
