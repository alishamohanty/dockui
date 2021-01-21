import express from 'express';
const router = express.Router();
import * as volume from '../servcies/volume'
import { middleware } from '../servcies/auth'

router.get('/volumes', middleware, volume.list);
router.post ('/volumes', middleware, volume.create)
router.get('/volume/:id', middleware, volume.read);
router.delete('/volume/:id', middleware, volume.destroy);
router.post('/volumes/', middleware, volume.prune);

export default router;