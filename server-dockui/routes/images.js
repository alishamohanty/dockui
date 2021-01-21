import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/images', async(req, res) => {
  try {
    res.send(
      await request('get', 'images/json')
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
