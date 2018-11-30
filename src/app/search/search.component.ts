import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  find: string = null;

  constructor(private _service: SearchService) {
  }

  change(str) {
    this._service.setValue(str);
  }
}
