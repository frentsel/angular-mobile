import { Component, Input } from '@angular/core';
import { StateService } from '../services/state.service';
import * as _ from 'lodash';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  commentsActive = false;

  @Input() entry;

  constructor(private _state: StateService) { }

  activateComments() {
    this.commentsActive = !this.commentsActive;
  }

  like() {
    this._state.setValue('like', this.entry);
  }
}
