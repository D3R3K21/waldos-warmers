import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacebookService } from '../services/facebook-service';
import { FbComment } from './fb-comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: FbComment[] = [];
  prevLink = '';
  nextLink = '';
  postId = '';
  constructor(private route: ActivatedRoute, private fbService: FacebookService, private router: Router) {

  }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('postId');
    this.fbService.retrieveComments(this.postId).subscribe(res => {
      this.comments = res.data;
      this.prevLink = res.paging.previous;
      this.nextLink = res.paging.next;
    });
    console.log('count: ' + this.getCommentsCount());
  }

  getCommentsCount(): number {
    let count = 0;
    this.fbService.retrieveCommentsCount(this.postId).subscribe(res => {
      count = res.summary.total_count;
    });
    return count;
  }
  onBack(): void {
    this.router.navigate(['/posts']);
  }

  onPrev(): void {
    this.fbService.retrievePaginatedComments(this.prevLink).subscribe(res => {
      this.comments = res.data;
      this.prevLink = res.paging.previous;
      this.nextLink = res.paging.next;
    });
  }
  onNext(): void {
    this.fbService.retrievePaginatedComments(this.nextLink).subscribe(res => {
      this.comments = res.data;
      this.prevLink = res.paging.previous;
      this.nextLink = res.paging.next;
    });
  }

}
