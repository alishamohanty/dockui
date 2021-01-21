import express from 'express';
const router = express.Router();
import * as network from '../servcies/network'
import { middleware } from '../servcies/auth'

router.get('/list', middleware, network.list);
router.post ('/', middleware, network.create)
router.get(':id', middleware, network.read);
router.delete('/:id', middleware, network.destroy);
router.post('/prune', middleware, network.prune);

export default router;