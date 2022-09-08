import { Client, Entity, Schema, Repository } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Log extends Entity { }
let schema = new Schema(
  Log,
  {
    thoughtstorming_question: { type: 'string' },
    ideas: { type: 'string' },
    corecepts: { type: 'string' },
    practical_applications: {type: 'string'},
  },
  {
    dataStructure: 'JSON',
  }
)