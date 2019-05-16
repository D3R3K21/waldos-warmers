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
  constructor(private http: HttpClient) {}

  retrievePosts(): Observable<FbPostsResponse> {
    return this.http.get<FbPostsResponse>('/api/posts.json').pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  retrieveComments(): Observable<FbCommentResponse> {
    return this.http.get<FbCommentResponse>('/api/comments.json').pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
