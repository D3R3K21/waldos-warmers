import { Action } from '@ngrx/store';
import { Post } from '../post';

export enum PostActionTypes {
  LoadComments = '[Posts] Load Comments',
  LoadingComments = '[Posts] Loading Comments',
  CommentsLoaded = '[Posts] Comments Loaded',
  LoadFail = '[Posts] Load Fail'
}

export class LoadComments implements Action {
  readonly type = PostActionTypes.LoadComments;
  constructor(public payload: string) {}
}

export class LoadingComments implements Action {
  readonly type = PostActionTypes.LoadingComments;
  constructor(public payload: string) {}
}

export class CommentsLoaded implements Action {
  readonly type = PostActionTypes.CommentsLoaded;
  constructor(public payload: Post[]) {}
}

export class LoadFail implements Action {
  readonly type = PostActionTypes.LoadFail;
  constructor(public payload: string) {}
}



export type PostActions =
  | LoadComments
  | CommentsLoaded
  | LoadFail;
