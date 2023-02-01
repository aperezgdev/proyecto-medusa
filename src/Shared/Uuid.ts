import { StringValueObject } from './value-objects/StringValueObject.js'
import { v4 as uuid } from 'uuid'

export class Uuid extends StringValueObject {
  static random(): Uuid {
    return new Uuid(uuid())
  }
}
