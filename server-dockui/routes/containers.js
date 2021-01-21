import express from 'express';
const router = express.Router();
import * as container from '../servcies/container'
import { middleware } from '../servcies/auth'

router.get('/containers', middleware, container.list);
router.get('/container/:id', middleware, container.read);
router.put('/container/:id/rename', middleware, container.rename);
router.put('/container/:id/restart', middleware, container.restart);
router.put('/container/:id/start', middleware, container.start);
router.put('/container/:id/stop', middleware, container.stop);
router.put('/container/:id/kill', middleware, container.kill);
router.put('/container/:id/pause', middleware, container.pause);
router.put('/container/:id/unpause', middleware, container.unpause);
router.delete('/container/:id', middleware, container.destroy);
router.post('/containers/', middleware, container.prune);

export default router;
