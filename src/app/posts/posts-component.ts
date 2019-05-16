import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { FacebookService } from '../services/facebook-service';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private fbService: FacebookService) { }

  posts: Post[];

  ngOnInit() {
    this.fbService.retrievePosts().subscribe(res => this.posts = res.data);
  }
}
