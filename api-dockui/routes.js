import express from 'express';
const router = express.Router();
import { middleware } from './servcies/auth'
import * as auth from './servcies/auth'
import * as network from './servcies/network'
import * as volume from './servcies/volume'
import * as container from './servcies/container'
import * as image from './servcies/image'

router.post('/login', auth.login);
router.delete ('/logout', auth.logout);

router.get('/image/list', middleware, image.list);
router.get('/image/:id', middleware, image.read);
router.delete('/image/:id', middleware, image.destroy);
router.post('/image/prune', middleware, image.prune);

router.get('/container/list', middleware, container.list);
router.get('/container/:id', middleware, container.read);
router.put('/container/:id/rename', middleware, container.rename);
router.put('/container/:id/restart', middleware, container.restart);
router.put('/container/:id/start', middleware, container.start);
router.put('/container/:id/stop', middleware, container.stop);
router.put('/container/:id/kill', middleware, container.kill);
router.put('/container/:id/pause', middleware, container.pause);
router.put('/container/:id/unpause', middleware, container.unpause);
router.delete('/container/:id', middleware, container.destroy);
router.post('/container/prune', middleware, container.prune);

router.get('/network/list', middleware, network.list);
router.post ('/network', middleware, network.create)
router.get('/network/:id', middleware, network.read);
router.delete('/network/:id', middleware, network.destroy);
router.post('/network/prune', middleware, network.prune);

router.get('/volume/list', middleware, volume.list);
router.post ('/volume/', middleware, volume.create)
router.get('/volume/:id', middleware, volume.read);
router.delete('/volume/:id', middleware, volume.destroy);
router.post('/volume/prune', middleware, volume.prune);

router.use('*', (req, res) => {
  res.status(404).send({message: 'Not found'})
})

router.use((req, res, err) => 
  res.status(500).send({
    message: 'Internal server error',
    error: err
    })
)
export default router;