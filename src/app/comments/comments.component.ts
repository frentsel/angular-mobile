import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent {

  text: string = null;

  @Input() entry = {
    comments: [],
    author: null
  };

  constructor(private _state: StateService) { }

  send():void {
    if (!this.text) {
      return;
    }
    this._state.setValue('comment', {
      author: this.entry.author,
      text: this.text,
    });
    this.text = null;
  }

}
