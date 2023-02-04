import { container } from 'tsyringe'
import { mongoClient } from '../database/MongoClient.js'

container.register('MongoClient', {
  useValue: mongoClient
})
