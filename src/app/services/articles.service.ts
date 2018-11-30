import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private _entries = new Subject<any>();

  setValue(obj: Object): void {
    this._entries.next(obj);
  }

  getValue(): Observable<Object> {
    return this._entries.asObservable();
  }
}
