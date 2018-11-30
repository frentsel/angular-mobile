import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { PostFormModule } from './post-form/post-form.module';
import { CommentsModule } from './comments/comments.module';
import { ArticleModule } from './article/article.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    PostFormModule,
    CommentsModule,
    ArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
