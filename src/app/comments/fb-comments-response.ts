import { FbComment } from './fb-comment';
import { FbPagingModel } from '../shared/fb-paging-model';
import { FbSummaryModel } from '../shared/fb-summary-model';
export interface FbCommentResponse {
  data: FbComment[];
  paging: FbPagingModel;
  summary: FbSummaryModel;
}
