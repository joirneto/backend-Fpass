# api-herois-marvel

Projeto criado para o Desafio Backend Fpass.

```
Crie uma API REST integrando com a API da Marvel para que pesquise/liste os heróis pelo nome e que seja possível marcar-los como favorito.

Portal para desenvolvedores da Marvel: Marvel for Developers

Espera-se do candidato uma aplicação com as seguintes funcionalidades:

Uma pesquisa pelo nome ou parte do nome do herói.
Marcar um herói como favorito.
Desmarcar um herói como favorito.
Listar todos os heróis marcados como favorito.
```
## Início
### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

Você deve criar um arquivo .env.local e inserir as seguintes variáveis de ambiente:

API_PUBLIC_KEY
API_PRIVATE_KEY

As chaves são geradas ao se cadastrar no https://developer.marvel.com/

```
npm install
npm run dev
```
## Construído com:

* [NextJS](https://nextjs.org/) -The React Framework. Oferece suporte para desenvolvimento front (com os 3 tipos de renderização) e criação de api facilitada.
* [Typescript](https://www.typescriptlang.org/) - TS é um superSet do JS. Nos oferece tipagem estática no JS. Nos oferecendo um maior constrole e organização durante o desenvolvimento.
* In memory database: Os dados ficam armazenado somente em tempo de execução do projeto.

## Usando API:
```json
{
"Consultar Heroi":"GET: /heroi?nome=nomedoheroi",
"Favoritar heroi consultado":"POST: /heroi -> params {nome: nomedoheroi, favoritar: true}",
"Desfavoritar heroi":"POST: /heroi -> params {nome: nomedoheroi, favoritar: false}",
"Consultar sua lista de favoritos":"GET: /heroi"
}
```
## Author:

* **Joir Neto** - [LinkedIn](https://www.linkedin.com/in/joir-neto/)
