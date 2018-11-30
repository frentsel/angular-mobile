import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { IconModule } from 'src/app/lib/icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [CommentComponent],
  exports: [CommentComponent],
})
export class CommentModule { }
