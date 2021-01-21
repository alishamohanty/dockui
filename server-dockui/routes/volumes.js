import express from 'express';
const router = express.Router();
import * as volume from '../servcies/volume'
import { middleware } from '../servcies/auth'

router.get('/list', middleware, volume.list);
router.post ('/', middleware, volume.create)
router.get('/:id', middleware, volume.read);
router.delete(':id', middleware, volume.destroy);
router.post('/prune', middleware, volume.prune);

export default router;