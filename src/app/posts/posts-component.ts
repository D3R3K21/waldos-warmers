import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { FacebookService } from '../services/facebook-service';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  id = 0;
  bgc = '00d1d1';

  pageInput = '';
  tokenInput = '';

  constructor(private fbService: FacebookService) { }

  posts: Post[];

  ngOnInit() {

  }

  doThings() {
    console.log(this.pageInput);
    console.log(this.tokenInput);

    this.fbService.retrievePosts(this.pageInput, this.tokenInput).subscribe(res => {
      this.posts = res.data;
    });
  }
}
