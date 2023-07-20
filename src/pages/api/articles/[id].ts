import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/shared/mongoose/connectDB';
import Article from '@/shared/mongoose/models/article';
import { genericErrors } from '@/shared/functions/handleErrors';
import checkToken from '@/shared/middlewares/checkToken';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const article = await Article.findById(id);
      res.status(200).json({ article });
    } catch (e: any) {
      console.error(e);
      res.status(400).json({ error: e.message });
    }
  } else if (req.method === 'PUT') {
    try {
      const article = await Article.findById(id);
      if (article) {
        for (const [key, value] of Object.entries(req.body)) {
          article[key] = value;
          await article.save();
        }
      }
      res.status(200).json({ message: 'Article updated', article });
    } catch (e) {
      console.error(e);
      res.status(400).json({ error: genericErrors(e) });
    }
  }
}

export default checkToken(handler);
