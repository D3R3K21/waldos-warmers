import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { FacebookService } from '../services/facebook-service';
import { SSL_OP_SINGLE_DH_USE } from 'constants';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  id = 0;
  bgc = '00d1d1';
  constructor(private fbService: FacebookService) { }

  posts: Post[];

  getId(): number {
    this.id++;
    return this.id + 0;
  }

  ngOnInit() {
    this.fbService.retrievePosts().subscribe(res => {
      this.posts = res.data;
    });
  }
}
