import { Injectable } from '@angular/core';
import { FacebookService } from 'src/app/services/facebook-service';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as postActions from './posts.actions';
import * as fromProducts from './posts.reducer';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private service: FacebookService,
    private store: Store<fromRoot.State>
  ) {}

  @Effect()
  loadComments$ = this.actions$.pipe(
    ofType(postActions.PostActionTypes.LoadComments),
    select(fromProducts.getSelectedPostId),
    map(x => {
      console.log('testing effects');
      return x;
    })
  );
}
