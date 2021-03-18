import { Response, } from 'restify';
import { Router, } from 'restify-router';
import ParsingController from 'service/api/controllers/parsing.controller';

const ParsingRoute = new Router();

ParsingRoute.post(
  '/storage',
  async (req, res): Promise<Response> => {
    try {
      const { document, } = req.body;
      const response = await ParsingController.storageDocument(document);

      return res.json({ data: response, success: true, });
    } catch (error) {
      return res.json({ data: [], success: false, });
    }
  }
);

export default ParsingRoute;
