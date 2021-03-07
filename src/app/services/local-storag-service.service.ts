import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStoragServiceService {
  constructor() {}

  setColor(color: any) {
    localStorage.setItem('color_option', color);
  }

  getColor(): string {
    var color= localStorage.getItem('color_option');
    if(color!=null){
      return color;
    }else{
      return "#1ec0e9";
    }
  }
}
