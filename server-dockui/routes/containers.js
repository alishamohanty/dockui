import express from 'express';
const router = express.Router();
import * as container from '../servcies/container'
import { middleware } from '../servcies/auth'

router.get('/list', middleware, container.list);
router.get('/:id', middleware, container.read);
router.put('/:id/rename', middleware, container.rename);
router.put('/:id/restart', middleware, container.restart);
router.put('/:id/start', middleware, container.start);
router.put('/:id/stop', middleware, container.stop);
router.put('/:id/kill', middleware, container.kill);
router.put('/:id/pause', middleware, container.pause);
router.put('/:id/unpause', middleware, container.unpause);
router.delete('/:id', middleware, container.destroy);
router.post('/prune', middleware, container.prune);

export default router;
