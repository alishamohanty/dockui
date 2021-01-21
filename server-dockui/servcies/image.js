import request from "../../library/resquest"
export {
  list,
  read,
  destroy,
  prune 
}

async function list(req, res) {
  try {
    res.send(await request('', ``))
  }
  catch(error){
    res.status(500).send(error)
  }
}

async function read(req, res) {
  try {
    res.send(await request('', ``))
  }
  catch(error){
    res.status(500).send(error)
  }
}

async function destroy(req, res) {
  try {
    res.send(await request('', ``))
  }
  catch(error){
    res.status(500).send(error)
  }
}

async function prune(req, res) {
  try {
    res.send(await request('', ``))
  }
  catch(error){
    res.status(500).send(error)
  }
}