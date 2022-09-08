import { createLog } from "../../lib/redis";

export default async function handler(req, res) {
  const id = await createLog(req.body);
  res.status(200).json({ id })
}