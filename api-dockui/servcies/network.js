import request from "../../library/resquest"

export {
  list,
  create,
  read,
  destroy,
  prune
}

async function list(req, res) {
  try {
    res.send(await request('', ``))
  } 
  catch(error) {
    res.status(500).send(error)
  }
}

async function create(req, res) {
  try {
    const body = {
      name: req.body.name,
      driver: req.body.driver,
      labels: req.body.labels
    }
    res.send(await request('', ``, body))
  } 
  catch(error) {
    res.status(500).send(error)
  }
}
async function read(req, res) {
  try {
    res.send(await request('', ``))
  } 
  catch(error) {
    res.status(500).send(error)
  }
}

async function destroy(req, res) {
  try {
    res.send(await request('', ``))
  } 
  catch(error) {
    res.status(500).send(error)
  }
}

async function prune(req, res) {
  try {
    res.send(await request('', ``))
  } 
  catch(error) {
    res.status(500).send(error)
  }
}