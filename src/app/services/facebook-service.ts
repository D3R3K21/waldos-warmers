import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { FbCommentResponse } from '../comments/fb-comments-response';
import { FbPostsResponse } from '../posts/fb-posts-response';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  postsAPI = '';
  commentsAPI = '';
  token = '';
  baseURI = '';
  pageId = '';
  params = '';
  constructor(private http: HttpClient) {
    this.postsAPI = '/api/posts.json';
    this.commentsAPI = '/api/comments.json';
    this.baseURI = 'https://graph.facebook.com/v3.3';
    this.pageId = 'pageid';
    this.token = `token`;
    this.params = '&pretty=0&limit=25&summary=1&filter=stream';
  }

  retrievePosts(pageId: string, token: string): Observable<FbPostsResponse> {
    return this.http.get<FbPostsResponse>(`${this.baseURI}/${this.pageId}/feed?access_token=${this.token}&pretty=0&limit=25`)
      .pipe(catchError(this.handleError));
    // return this.http.get<FbPostsResponse>(`${this.baseURI}/${pageId}/feed?access_token=${token}&pretty=0&limit=25`)
    //   .pipe(catchError(this.handleError));
  }

  retrieveCommentsCount(postId: string): Observable<FbCommentResponse> {
    let uri=`${this.baseURI}/${postId}/comments?access_token=${this.token}${this.params.replace('&limit=25', '&limit=0')}`;
    return this.http.get<FbCommentResponse>(uri).pipe(catchError(this.handleError));
  }

  retrieveComments(postId: string): Observable<FbCommentResponse> {
    let uri = `${this.baseURI}/${postId}/comments?access_token=${this.token}${this.params}`;
    return this.http.get<FbCommentResponse>(uri).pipe(catchError(this.handleError));
  }

  retrievePaginatedComments(uri: string): Observable<FbCommentResponse> {
    return this.http.get<FbCommentResponse>(`${uri}${this.params}`).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
