<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 02: Conceitos do Node.js
</h3>

<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>


## 👉 Como executar


1. Abra o terminal e execute o comando `yarn` no diretório do desafio, para que instale as dependências.

2. Para rodar a aplicação execute `yarn dev` e faça os testes com o Postman/Insomnia com a URL: http://localhost:3333

3. Caso queira rodar os testes execute `yarn test`

Enjoy it! 😁

## :rocket: Sobre o desafio

Nesse desafio, é necessário criar uma aplicação apenas para treinar o que aprendi até agora no Node.js.

Será uma aplicação para armazenar repositórios de um portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".


### Rotas da aplicação

- [x] **`POST /repositories`**: A rota deve receber `title`, `url` e `techs` dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: `{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }`; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

- [ ] **`GET /repositories`**: Rota que lista todos os repositórios;

- [ ] **`PUT /repositories/:id`**: A rota deve alterar apenas o `title`, a `url` e as `techs` do repositório que possua o `id` igual ao `id` presente nos parâmetros da rota;

- [ ] **`DELETE /repositories/:id`**: A rota deve deletar o repositório com o `id` presente nos parâmetros da rota;

- [ ] **`POST /repositories/:id/like`**: A rota deve aumentar o número de likes do repositório específico escolhido através do `id` presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desafio feito com 💜 por Gabriel Papke