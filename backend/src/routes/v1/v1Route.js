import express from 'express';

import userRouter from './users';

const v1Router = express.Route();

v1Router.use('/v1',userRouter);

export default v1Router;
