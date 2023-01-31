import { type Document, type Collection, type MongoClient } from 'mongodb'
import { type AggregateRoot } from '../domian/AggregateRoot'
import { type Criteria } from '../domian/Criteria/Criteria'
import { MongoCriteriaConverter } from './MongoCriteriaConverter'

export abstract class MongoRepository<T extends AggregateRoot> {
  private readonly criteriaConverter: MongoCriteriaConverter

  constructor(private readonly _client: Promise<MongoClient>) {
    this.criteriaConverter = new MongoCriteriaConverter()
  }

  protected abstract collectionName(): string

  protected async collection(): Promise<Collection> {
    return (await this._client).db().collection(this.collectionName())
  }

  protected async persist(id: string, aggregateRoot: T): Promise<void> {
    const collection = await this.collection()

    const document = { ...aggregateRoot.toPrimitives(), _id: id, id: undefined }

    await collection.updateOne({ _id: id }, { $set: document }, { upsert: true })
  }

  protected async searchByCriteria<D extends Document>(criteria: Criteria): Promise<D[]> {
    const query = this.criteriaConverter.convert(criteria)

    const collection = await this.collection()

    return await collection.find<D>(query.filter, {}).sort(query.sort).skip(query.skip).limit(query.limit).toArray()
  }
}
