import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as _ from 'lodash';
import { StateService } from '../services/state.service';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostFormComponent {

  text: string = null;

  constructor(private _state: StateService) { }

  post(): void {
    if (!this.text) {
      return;
    }
    this._state.setValue('article', {
      entryId: _.uniqueId(),
      text: this.text,
      date: _.now(),
      author: null,
      likes: [],
      comments: []
    });
    this.text = null;
  }
}
