import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LocalStoragServiceService {
  constructor() {
  }

  // tslint:disable-next-line:typedef
  setColor(color: any): Observable<any> {
    localStorage.setItem('color_option', color);
    return Observable.create((observer: { next: (arg0: any) => void; complete: () => void; }) => {
      observer.next(color);
      observer.complete();
    });
  }

  getColor(): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let color = localStorage.getItem('color_option') as any;
    if (color == null) {
      color = '#0a0ac1';
    }
    return Observable.create((observer: { next: (arg0: any) => void; complete: () => void; }) => {
      observer.next(color);
      observer.complete();
    });
  }
}
