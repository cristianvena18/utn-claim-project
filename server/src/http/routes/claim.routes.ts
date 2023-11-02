import { Application } from 'express';
import CommonRoutes from './common.routes';
import createClaimAction from '../actions/claims/create.claim.action';
import likeClaimAction from '../actions/claims/like.claim.action';
import findLastClaimsActions from 'http/actions/claims/find-last.claim.action';
import findLastFiveClaimsAction from '../actions/claims/find-last-five.claim.action';
import reportDuplicateClaimAction from "../actions/claims/report-duplicate.claim.action";

class ClaimRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Claim');
  }

  public setUpRoutes(): Application {
    this.app.post('/claims', createClaimAction.run);
    this.app.put('/claims/:id/like', likeClaimAction.run);
    this.app.put('/claims/:id/report', reportDuplicateClaimAction.run)
    this.app.get('/claims', findLastClaimsActions.run);
    this.app.get('/claims/on-fire', findLastFiveClaimsAction.run);

    return this.app;
  }
}

export default ClaimRoutes;
