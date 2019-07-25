import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts-component';
import { CommentsComponent } from '../comments/comments.component';
import { RouterModule } from '@angular/router';
import { CommentsRouteGuard } from '../comments/comments-guard';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../posts/state/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from '../posts/state/posts.effects';

@NgModule({
  declarations: [
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'giveaway/comments/:postId', canActivate: [CommentsRouteGuard], component: CommentsComponent },
      { path: 'giveaway/posts', component: PostsComponent },
      { path: 'about-us', component: AboutComponent },
      { path: 'home', component: HomeComponent },
      { path: 'giveaway', redirectTo: 'giveaway/posts', pathMatch: 'full' }
    ]),
    StoreModule.forFeature('posts', reducer),
    EffectsModule.forFeature([PostEffects]),
  ]
})
export class GiveawayModule { }
