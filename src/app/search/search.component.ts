import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  find: string = null;

  constructor(private _state: StateService) {
  }

  change(str) {
    this._state.setValue('search', str);
  }
}
