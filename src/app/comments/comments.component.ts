import { Component, Input } from '@angular/core';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  text: string = null;

  @Input() entry;

  constructor(private _service: CommentsService) { }

  send() {
    if (!this.text) {
      return;
    }
    this._service.setValue({
      author: this.entry.author,
      text: this.text,
    });
    this.text = null;
  }

}
