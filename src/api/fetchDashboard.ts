import prisma from '../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      const dashboard = await prisma.dashboard.findMany()
      res.status(200).json({ dashboard: dashboard });
}