import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private state: { [key: string]: Subject<any> } = {};

  setValue(key: string, obj: Object): void {
    if (this.state[key]) {
      this.state[key].next(obj);
    }
  }

  getValue(key: string): Observable<Object> {
    if (!this.state[key]) {
      this.state[key] = new Subject<any>();
    }
    return this.state[key].asObservable();
  }
}
