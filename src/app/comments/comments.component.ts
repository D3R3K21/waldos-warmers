import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacebookService } from '../services/facebook-service';
import { FbComment } from './fb-comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: FbComment[] = [];
  prevLink = '';
  nextLink = '';
  postId = '';
  constructor(
    private route: ActivatedRoute,
    private fbService: FacebookService
  ) {}

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('postId');
    this.fbService.retrieveComments(this.postId).subscribe(res => {
      this.comments = res.data;
      this.prevLink = res.paging.previous;
      this.nextLink = res.paging.next;
      if (this.nextLink) {
        this.loadNextComments();
      }
    });
  }

  selectRandomComment(): void {
    if (this.comments.length <= 0) {
      return;
    }
    const index = Math.floor(Math.random() * this.comments.length);
    const comment = this.comments[index];
    comment.color = 'b5d100';

    var element = document.getElementById(comment.id);

    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({ block: 'end' });
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  }
  loadNextComments(): void {
    this.fbService.retrievePaginatedComments(this.nextLink).subscribe(res => {
      this.comments = this.comments.concat(
        res.data.map(c => {
          c.color = '#FFFFFF';
          return c;
        })
      );
      this.nextLink = res.paging.next;
      if (this.nextLink) {
        this.loadNextComments();
      }
    });
  }
  getCommentsCount(): number {
    let count = 0;
    this.fbService.retrieveCommentsCount(this.postId).subscribe(res => {
      count = res.summary.total_count;
    });
    return count;
  }

  onPrev(): void {
    this.fbService.retrievePaginatedComments(this.prevLink).subscribe(res => {
      this.comments = res.data.map(c => {
        c.color = '#FFFFFF';
        return c;
      });
      this.prevLink = res.paging.previous;
      this.nextLink = res.paging.next;
    });
  }

  onNext(): void {
    this.fbService.retrievePaginatedComments(this.nextLink).subscribe(res => {
      this.comments = res.data.map(c => {
        c.color = '#FFFFFF';
        return c;
      });
      this.prevLink = res.paging.previous;
      this.nextLink = res.paging.next;
    });
  }
}
