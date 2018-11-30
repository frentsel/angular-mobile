import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import * as _ from 'lodash';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

  text: string = null;

  constructor(private _service: ArticlesService) { }

  post(): void {
    if (!this.text) {
      return;
    }
    this._service.setValue({
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
