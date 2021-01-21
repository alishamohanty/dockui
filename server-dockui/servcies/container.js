import { request } from '../../library/request';

module.exports = {
  start,
  stop,
  list,
  read,
  rename,
  destroy,
  prune,
  restart,
  kill,
  pause,
  unpause
}

async function start(req, res) {
  try {
    res.send(await request('post', ``))
  } catch (error) {
    res.status(500).send(error);
  }
}

async function stop(req, res) {
  try {
    res.send(await request('post', ``))
  } catch (error) {
    res.status(500).send(error);
  }
}

async function list(req, res) {
  try {
    res.send(await request('get', ``))
  } catch (error) {
    res.status(500).send(error);
  }
}

async function read(req, res) {
  try {
    res.send(await request('get', ``))
  } catch (error) {
    res.status(500).send(error);
  }
}

async function rename(req, res) {
  try {
    res.send(await request('post', ``))
  } catch (error) {
    res.status(500).send(error);
  }
}

async function destroy(req, res) {
  try {
    res.send(await request('delete', ``))
  } catch (error) {
    res.status(500).send(error);
  }
}

async function prune(req, res) {
  try {
    res.send(await request('post', ``))
  } catch (error) {
    res.status(500).send(error);
  }
}

async function restart(req, res) {
  try {
    res.send(await request('post', ``))
  } catch (error) {
    res.status(500).send(error);
  }
}

async function kill(req, res) {
  try {
    res.send(await request('post', ``))
  } catch (error) {
    res.status(500).send(error);
  }
}

async function pause(req, res) {
  try {
    res.send(await request('post', ``))
  } catch (error) {
    res.status(500).send(error);
  }
}

async function unpause(req, res) {
  try {
    res.send(await request('post', ``))
  } catch (error) {
    res.status(500).send(error);
  }
}
