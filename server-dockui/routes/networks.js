import express from 'express';
const router = express.Router();
import * as network from '../servcies/network'
import { middleware } from '../servcies/auth'

router.get('/networks', middleware, network.list);
router.post ('/networks', middleware, network.create)
router.get('/network/:id', middleware, network.read);
router.delete('/network/:id', middleware, network.destroy);
router.post('/networks/', middleware, network.prune);

export default router;