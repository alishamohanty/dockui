import express from 'express';
const router = express.Router();
import { login, logout } from '../servcies/auth'

router.post('/login', login);
router.delete ('/logout', logout);

router.use('*', (req, res) => {
  res.status(404).send({message: 'Not found'})
})

router.use((req, res, err) => 
  res.status(500).send({message: 'Internal server error'})
)
export default router;