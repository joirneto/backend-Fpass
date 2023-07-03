import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import md5 from 'md5';

import {apiPublicKey, apiPrivateKey} from '../../../config';
import {postSchema, validateSchema } from '../../../utils/schema';
const FAVORITOS_DB: string [] = [];
const HEROIS_DB: {[key: string]: any} = {}; 


const getHeroi = async (nome: string) => {
  const timestamp = new Date().getTime().toString();
  const hash = md5(timestamp + apiPrivateKey + apiPublicKey);
  const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${nome}&ts=${timestamp}&apikey=${apiPublicKey}&hash=${hash}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    const herois = data.data.results;
    HEROIS_DB[nome.toUpperCase()] = herois;
    return herois.map((heroi: { name: string; description: string; }) => {
      return {
        Heroi: heroi.name,
        Sobre: heroi.description
    }
    })

  } catch (error: any) {
    throw new Error('Erro ao obter dados do herói: ' + error.message);
  }
};

const favoritarHeroi = (nome: string): {status: number, msg: string} => {
  if (FAVORITOS_DB.includes(nome)){
    return {
      status: 400,
      msg: `${nome} já está na lista dos seus favoritados!`
    }
  } else {
    FAVORITOS_DB.push(nome);
    return {
      status: 200,
      msg: `${nome} favoritado!`
    }
  }
}

const desFavoritarHeroi = (nome: string): {status: number, msg: string} => {
  if (FAVORITOS_DB.includes(nome)){
    const index = FAVORITOS_DB.indexOf(nome);
    FAVORITOS_DB.splice(index, 1);
    return {
      status: 200,
      msg: `${nome} foi removida da lista dos seus favoritados!`
    }
  } else {
    return {
      status: 400,
      msg: `${nome} não está na lista dos seus favoritados!`
    }
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET' && req.query.nome) {
    try {
      const { nome } = req.query;
      const heroi = await getHeroi(nome);
      res.status(200).json(heroi);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    const validSchema = await validateSchema(req, postSchema);
    if (validSchema) {
      res.status(400).send(validSchema);
    }
    const {nome, favoritar} = req.body;
    const nomeHeroi = nome.toUpperCase();
    if (!HEROIS_DB[nomeHeroi]) {
      res.status(404).send(`Erro em favoritar! ${nome} ainda não foi consultado.`);
    } else {
      if (['true', true].includes(favoritar)) {
        const {status, msg} = favoritarHeroi(nomeHeroi);
        res.status(status).send(msg);
      } else if (['false', false].includes(favoritar)){
        const {status, msg} = desFavoritarHeroi(nomeHeroi);
        res.status(status).send(msg);
      }
    }
  } else if (req.method === 'GET') {
    res.status(200).send(FAVORITOS_DB);
  }
}

