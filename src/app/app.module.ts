import { PostsComponent } from './posts/posts-component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'comments', component: CommentsComponent },
      { path: 'posts', component: PostsComponent },
      { path: '', redirectTo: 'posts', pathMatch: 'full' }
    ], { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
