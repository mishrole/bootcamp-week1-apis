import { Router, } from 'restify-router';

import ParsingRoute from './parsing.route';

const RouterManager = new Router();

RouterManager.add('/parsing', ParsingRoute);

export default RouterManager;
