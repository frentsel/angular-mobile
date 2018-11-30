import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { CommentsModule } from '../comments/comments.module';
import { IconModule } from '../lib/icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    CommentsModule,
    IconModule
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
})
export class ArticleModule { }
