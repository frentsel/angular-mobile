import { Component } from '@angular/core';
import { ArticlesService } from './services/articles.service';
import { SearchService } from './services/search.service';
import { CommentsService } from './services/comments.service';
import { LikesService } from './services/likes.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  _author: string = 'Harry Potter';
  _entries: any[] = [];
  entries: any[] = [
    {
      entryId: _.uniqueId(),
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam aliquid quis temporibus! Reprehenderit dolores quae voluptatum quod exercitationem cumque excepturi omnis esse deleniti, est adipisci illum eveniet odio asperiores.',
      date: _.now(),
      author: 'Not Me',
      likes: [{ author: 'Not Me' }],
      comments: [
        {
          author: 'Alex',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
          author: 'Not Me',
          text: 'Reprehenderit dolores quae voluptatum quod exercitationem cumque excepturi omnis esse deleniti, est adipisci illum eveniet odio asperiores.',
        }
      ],
    }
  ];

  constructor(
    private _articles: ArticlesService,
    private _comments: CommentsService,
    private _likes: LikesService,
    private _search: SearchService,
  ) {
    this._articles.getValue().subscribe(this.applyArticles.bind(this));
    this._comments.getValue().subscribe(this.applyComments.bind(this));
    this._search.getValue().subscribe(this.applySearch.bind(this));
    this._likes.getValue().subscribe(this.applyLikes.bind(this));
  }

  ngAfterViewInit() {
    // this._author = prompt("Please enter your name", this._author);
  }

  applyArticles(entry) {
    this._entries = [...this.entries];
    entry.author = this._author;
    this.entries.unshift(entry as any);
    this.entries = [...this.entries];
    this._entries = [...this.entries];
  }

  applyComments({ author, text }: any) {
    this.entries.forEach((entry) => {
      if (entry.author === author) {
        entry.comments.unshift({ author: 2, text });
      }
    });

    this.entries = [...this.entries];
    this._entries = [...this.entries];
  }

  applySearch(str) {
    this.entries = this._entries.filter((el) => {
      return el.text.indexOf(str) > -1;
    });
  }

  applyLikes(like) {

    const entry = this.entries.find((el) => el.entryId === like.entryId);

    if (!entry) {
      return;
    }

    const _like = entry.likes.find(el => el.author === this._author);

    if (_like) {
      _.remove(entry.likes, (el) => el == _like);
    } else {
      entry.likes.push({ author: this._author });
    }
  }
}
