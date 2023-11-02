import { Application } from 'express';
import CommonRoutes from './common.routes';
import createVisitorAction from '../actions/visitors/create.visitor.action';
import getVisitorsAction from '../actions/visitors/find.visitor.action';


class VisitorRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Visitor');
  }

  public setUpRoutes(): Application {
    this.app.post('/visitors', createVisitorAction.run);
    this.app.get('/visitors', getVisitorsAction.run);

    return this.app;
  }
}

export default VisitorRoutes;