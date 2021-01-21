import express from 'express';
const router = express.Router();
import * as image from '../servcies/image'
import { middleware } from '../servcies/auth'

router.get('/list', middleware, image.list);
router.get('/:id', middleware, image.read);
router.delete('/:id', middleware, image.destroy);
router.post('/prune', middleware, image.prune);

export default router;
