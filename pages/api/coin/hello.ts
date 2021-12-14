// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { people } from '../../../data'
export default function handler(req: any, res: any) {
  res.status(200).json(people)
}
