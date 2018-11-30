import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { CommentModule } from './comment/comment.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CommentModule,
    FormsModule
  ],
  declarations: [CommentsComponent],
  exports: [CommentsComponent],
})
export class CommentsModule { }
