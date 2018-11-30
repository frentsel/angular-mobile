import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  imports: [
    CommonModule,
    CommentsModule
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
})
export class ArticleModule { }
