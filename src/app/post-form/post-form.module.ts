import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PostFormComponent],
  exports: [PostFormComponent],
})
export class PostFormModule { }
