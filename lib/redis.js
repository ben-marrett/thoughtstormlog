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
    thoughtstorming_question: { type: 'string', textSearch: true },
    ideas: { type: 'string', textSearch: true },
    corecepts: { type: 'string', textSearch: true },
    practical_applications: { type: 'string' },
    start_time: { type: 'string' },
    end_time: { type: 'string' },
    roll: { type: 'string', textSearch: true },
  },
  {
    dataStructure: 'JSON',
  }
)

export async function createLog(data) {
  await connect();

  const repository = client.fetchRepository(schema);

  const log = repository.createEntity(data);

  const id = await repository.save(log);

  return id;
}

export async function createIndex() {
  await connect();

  const repository = client.fetchRepository(schema);

  await repository.createIndex();

}