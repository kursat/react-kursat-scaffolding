import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res
    .status(200)
    .json([
      { title: 'Star Wars' },
      { title: 'Harry Potter' },
      { title: 'LOTR' },
    ])
}
