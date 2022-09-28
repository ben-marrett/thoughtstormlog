import { Client, Entity, Schema, Repository, Where } from "redis-om";

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
    thoughtstorming_question: { type: 'text', textSearch: true },
    ideas: { type: 'text', textSearch: true },
    corecepts: { type: 'text', textSearch: true },
    practical_applications: { type: 'string' },
    start_time: { type: 'string' },
    end_time: { type: 'string' },
    roll: { type: 'text', textSearch: true },
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

export async function searchLogs(q) {
  await connect();

  const repository = client.fetchRepository(schema)

  const logs = await repository
    .search()
    .where('ideas')
    .matches(q)
    .or('corecepts')
    .matches(q)
    .or('thoughtstorming_question')
    .matches(q)
    .or('roll')
    .matches(q)
    .return.all()
  
  return logs
}

export async function getAllLogs() {
  await connect();

  //To do.
}