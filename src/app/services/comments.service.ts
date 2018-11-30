import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private _comments = new Subject<any>();

  setValue(obj: Object): void {
    this._comments.next(obj);
  }

  getValue(): Observable<Object> {
    return this._comments.asObservable();
  }
}
