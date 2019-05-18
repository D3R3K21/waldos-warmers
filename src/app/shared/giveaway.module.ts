import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts-component';
import { CommentsComponent } from '../comments/comments.component';
import { RouterModule } from '@angular/router';
import { CommentsRouteGuard } from '../comments/comments-guard';

@NgModule({
  declarations: [
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'comments/:postId', canActivate: [CommentsRouteGuard], component: CommentsComponent },
      { path: 'posts', component: PostsComponent },
      { path: '', redirectTo: 'posts', pathMatch: 'full' }
    ]),
  ]
})
export class GiveawayModule { }
