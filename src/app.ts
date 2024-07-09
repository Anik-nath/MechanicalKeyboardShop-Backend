import express from 'express';
import cors from 'cors';
import { router } from './App/routes';
import notFoundRoute from './App/middleware/notFoundRoute';
import testServer from './App/middleware/testServer';
const app = express();

//parser
app.use(express.json());
app.use(cors());

// api endpoint
app.use('/api/v1', router);

// server test route
app.get('/', testServer);

// 404 route
app.get('*', notFoundRoute);

export default app;
