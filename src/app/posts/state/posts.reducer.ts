import * as fromRoot from '../../state/app.state';
import { Post } from '../post';
import { PostActions, PostActionTypes } from './posts.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  posts: PostsState;
}

export interface PostsState {
  posts: Post[];
  error: string;
  selectedPostId: string;
}

const initialState: PostsState = {
  posts: [],
  error: '',
  selectedPostId: ''
};

export function reducer(state = initialState, action: PostActions): PostsState {
  switch (action.type) {
    case PostActionTypes.CommentsLoaded:
      console.log('testing reducer: comments loaded');
      return { ...state, posts: action.payload };
    case PostActionTypes.LoadComments:
      return { ...state, selectedPostId: action.payload };
    default:
      return state;
  }
}

export const getProductFeatureState = createFeatureSelector<PostsState>(
  'posts'
);

export const getSelectedPostId = createSelector(
  getProductFeatureState,
  s => s.selectedPostId
);

export const getPosts = createSelector(
  getProductFeatureState,
  s => s.posts
);
