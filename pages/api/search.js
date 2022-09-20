import { searchLogs } from "../../lib/redis";

export default async function handler(req, res) {
  const q = req.query.q;
  const logs = await searchLogs(q);
  res.status(200).json({logs})

}