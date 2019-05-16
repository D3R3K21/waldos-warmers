import { PostsComponent } from './posts/posts-component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsRouteGuard } from './comments/comments-guard';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'comments/:postId', canActivate: [CommentsRouteGuard], component: CommentsComponent },
      { path: 'posts', component: PostsComponent },
      { path: '', redirectTo: 'posts', pathMatch: 'full' }
    ], { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
