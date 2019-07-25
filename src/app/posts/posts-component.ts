import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { FacebookService } from '../services/facebook-service';
import { Store, select } from '@ngrx/store';
import * as fromPosts from '../posts/state/posts.reducer';
import { takeWhile } from 'rxjs/operators';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  id = 0;
  bgc = '00d1d1';

  componentActive = true;
  pageInput = '';
  tokenInput = '';
  idInput = '';

  constructor(private fbService: FacebookService, private store: Store<fromPosts.State>) { }

  posts: Post[];

  ngOnInit() {
    this.store.pipe(
      takeWhile(() => this.componentActive),
      select(fromPosts.getSelectedPostId))
      .subscribe(currentProduct => {
        this.idInput = currentProduct;
      });
  }

  doThings() {
    this.fbService.retrievePosts(this.pageInput, this.tokenInput).subscribe(res => {
      this.posts = res.data;
    });
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
