import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _searh = new Subject<any>();

  setValue(obj: Object): void {
    this._searh.next(obj);
  }

  getValue(): Observable<Object> {
    return this._searh.asObservable();
  }
}
