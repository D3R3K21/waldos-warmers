import { Post } from './post';

export interface FbPostsResponse {
  data: Post[];
  next: string;
}
