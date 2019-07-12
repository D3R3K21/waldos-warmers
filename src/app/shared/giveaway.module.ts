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
      { path: 'giveaway/comments/:postId', canActivate: [CommentsRouteGuard], component: CommentsComponent },
      { path: 'giveaway/posts', component: PostsComponent },
      { path: 'giveaway', redirectTo: 'giveaway/posts', pathMatch: 'full' }
    ]),
  ]
})
export class GiveawayModule { }
