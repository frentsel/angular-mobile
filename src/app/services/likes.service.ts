import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  private _state = new Subject<any>();

  setValue(obj: Object): void {
    this._state.next(obj);
  }

  getValue(): Observable<Object> {
    return this._state.asObservable();
  }
}
