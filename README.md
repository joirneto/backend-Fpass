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

[![HitCount](https://hits.dwyl.com/joirneto/palpite_box.svg)](https://hits.dwyl.com/joirneto/palpite_box)

Este projeto foi construído durante o curso Fullstack Master do [DevPleno](https://devpleno.com). Uma versão online deste projeto pode ser encontrada em: https://palpite-box-joir-dev.vercel.app/ .

![Preview](https://github.com/joirneto/palpite_box/blob/master/public/palpite-box.png?raw=true)



## Início



### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm run dev
```

## Layout:

Criamos o layout utilizando o Figma. Você pode encontrar o arquivo [aqui](https://www.figma.com/file/PXBVsUfwlCjNF4DiN1c4Iv/palpite-box-JN).

## Colocando em produção:

Este projeto pode ser colocado em produção utilizando o Vercel. É necessário criar as variáveis de ambiente para configurar o acesso as planilhas do Google:

```
SHEET_CLIENT_EMAIL=client email do service credential
SHEET_PRIVATE_KEY=private key do service credential - lembrar de substituir \n por quebras de linha e de codificar em base 64
SHEET_DOC_ID=id da planilha
```

## Construído com:

* [NextJS](https://nextjs.org/) -The React Framework.
* [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for
rapidly building custom designs.
* [Figma](https://figma.com/) - Online prototyping tool.
* [Google Sheets](https://drive.google.com) - Planilhas online do Google

## Author:

* **Joir Neto** - [LinkedIn](https://www.linkedin.com/in/joir-neto/)
* **Prof Orientador - Tulio Faria** - [LinkedIn](https://www.linkedin.com/in/tuliofaria/)



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
