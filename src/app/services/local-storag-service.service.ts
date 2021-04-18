import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LocalStoragServiceService {

  subjectColor = new Subject<string>();
  constructor() {
  }
  setColor(color: any): Observable<any> {
    localStorage.setItem('color_option', color);
    return new Observable((observer) => {
      observer.next(color);
    });
  }

  getColor(): Observable<any> {

    let color = localStorage.getItem('color_option') as any;
    if (color == null) {
      color = '#0a0ac1';
    }
    return new Observable((observer) => {
      observer.next(color);
    });
  }
}
