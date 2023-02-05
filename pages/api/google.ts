import type { NextApiRequest, NextApiResponse } from 'next'
import { getUserInfo, type Student, type Professor } from 'chibatech-auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.code == null) {
    res.status(400).json({ message: 'Bad Request'})
  }


  const code = req.query.code
  const userData: Student | Professor | { type: string } = await getUserInfo(code as string)
  console.log(userData)

  let result = ''
  Object.keys(userData).map(i => {
    result += i + ': ' + userData[i] + '\n'
  })
  res.setHeader('Content-Type', 'text/plain;charset=utf-8').status(200).send(result)
}
