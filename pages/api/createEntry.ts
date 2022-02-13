import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../providers/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await req.body;
  console.log(data);
  const entry = await prisma.projectEntry.create({
    data: {
      teamName: data.teamName,
      projectName: data.projectName,
      projectLink: data.projectLink,
    },
  });
  res.status(200).send(entry);
}
