import express from 'express';
import { EventRoutes } from './event.routes';
import { UserRoutes } from './user.routes';
import { AiRoutes } from './ai.routes';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/products',
    route: EventRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/ai',
    route: AiRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;