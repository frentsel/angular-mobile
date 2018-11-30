import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form.component';
import { IconModule } from '../lib/icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IconModule
  ],
  declarations: [PostFormComponent],
  exports: [PostFormComponent],
})
export class PostFormModule { }
