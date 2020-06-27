const express = require("express");
const cors = require("cors");

const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validateRepositoryId (request, response, next) {
  const { id } = request.params

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid repository ID"})
  }

  next()
}

function validateRepositoryFinded (request, response, next) {
  const { id } = request.params
  const repositoryIndex = repositories.findIndex(repo => repo.id === id)

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: "Repository not found "})
  }

  response.locals.repositoryIndex = repositoryIndex;

  next()
}

app.use('/repositories/:id', validateRepositoryId, validateRepositoryFinded)

app.get("/repositories", (request, response) => response.json(repositories));

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  const newRepository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };

  repositories.push(newRepository);

  return response.json(newRepository);
});

app.put("/repositories/:id", (request, response) => {
  const { title, url, techs } = request.body
  const { repositoryIndex } = response.locals;

  const updatedRepository = {
    ...repositories[repositoryIndex],
    title,
    url,
    techs
  }

  repositories[repositoryIndex] = updatedRepository;

  return response.json(updatedRepository)
});

app.delete("/repositories/:id", (request, response) => {
  const { repositoryIndex } = response.locals;

  repositories.splice(repositoryIndex, 1)

  return response.status(204).send()
});

app.post("/repositories/:id/like", (request, response) => {
  const { repositoryIndex } = response.locals;

  const likesNumber = repositories[repositoryIndex].likes

  const updatedRepository = {
    ...repositories[repositoryIndex],
    likes: likesNumber + 1
  }

  repositories[repositoryIndex] = updatedRepository;

  return response.json(updatedRepository)
});

module.exports = app;
