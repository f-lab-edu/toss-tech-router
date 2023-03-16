import { rest } from 'msw';
import { isObjectEmpty } from '../utils/apiUtils';

export const mockServer = ({ method, path, statusCode, responseCallback }) =>
  rest[method.toLowerCase()](path, (req, res, ctx) => {
    const hasParams = isObjectEmpty(req.params);
    const response = hasParams ? responseCallback(req.params) : responseCallback();
    return res(ctx.status(statusCode), ctx.json(response));
  });
