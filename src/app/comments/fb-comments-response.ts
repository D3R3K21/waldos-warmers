import { FbComment } from './fb-comment';
export interface FbCommentResponse {
  data: FbComment[];
  next: string;
}
