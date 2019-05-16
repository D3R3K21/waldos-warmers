import { FbCommentResponse } from './fb-comments-response';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacebookService } from '../services/facebook-service';
import { FbComment } from './fb-comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  postId = '';
  comments: FbComment[] = [];
  fbResponse: FbCommentResponse;

  constructor(private route: ActivatedRoute, private fbService: FacebookService) {
    this.postId = this.route.snapshot.paramMap.get('postId');
   }

  ngOnInit() {
    this.fbService.retrieveComments().subscribe(res=> this.comments = res.data);
  }

}
