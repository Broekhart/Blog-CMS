import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/shared/mongoose/connectDB';
import Article from '@/shared/mongoose/models/article';
import { articleErrors } from '@/shared/functions/handleErrors';
import checkToken from '@/shared/middlewares/checkToken';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const articles = await Article.find(req.query);
      if (!articles) throw new Error("Articles don't exist");

      res.status(200).json(articles);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  } else if (req.method === 'POST') {
    try {
      const article = await Article.create(req.body);

      res.status(200).json(article);
    } catch (e) {
      res.status(400).json({ error: articleErrors(e) });
    }
  }
}

export default checkToken(handler);
