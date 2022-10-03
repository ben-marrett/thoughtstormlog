import { getLogs } from "../../lib/redis";

export default async function handler(req, res) {
  const allLogs = await getLogs()
  res.status(200).json({ logs })
}