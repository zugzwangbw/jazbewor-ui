import { NextApiRequest, NextApiResponse } from 'next'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function exemple(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date()

  res.setHeader(`Cache-Control`, `s-maxage=10, stale-while-revalidate`)

  return res.status(200).json({
    date: date.toUTCString()
  })
}
