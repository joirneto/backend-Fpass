import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ 
      message: 'Desafio backend-Fpass.',
      'Consultar Heroi':'GET: /heroi?nome=nomedoheroi',
      'Favoritar heroi consultado': 'POST: /heroi -> params {nome: nomedoheroi, favoritar: true}',
      'Desfavoritar heroi': 'POST: /heroi -> params {nome: nomedoheroi, favoritar: false}',
      'Consultar sua lista de favoritos': 'GET: /heroi'
    });
  } else {
    res.status(400).json({ error: 'Método invalido!' });
  }
}
