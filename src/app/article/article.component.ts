import { Component, Input } from '@angular/core';
import { LikesService } from '../services/likes.service';
import * as _ from 'lodash';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  commentsActive = false;

  @Input() entry;

  constructor(private _service: LikesService) { }

  activateComments() {
    this.commentsActive = !this.commentsActive;
  }

  like() {
    this._service.setValue(this.entry);
  }
}
