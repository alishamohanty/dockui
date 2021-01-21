import express from 'express';
const router = express.Router();
import * as image from '../servcies/image'
import { middleware } from '../servcies/auth'

router.get('/images', middleware, image.list);
router.get('/image/:id', middleware, image.read);
router.delete('/image/:id', middleware, image.destroy);
router.post('/images/', middleware, image.prune);

export default router;
