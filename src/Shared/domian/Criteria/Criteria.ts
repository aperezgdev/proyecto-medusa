import { type Filter } from './Filter'
import { type Order } from './Order'

export class Criteria {
  readonly filters: Filter[]
  readonly order: Order
  readonly limit?: number
  readonly offset?: number

  constructor(filters: Filter[], order: Order, limit?: number, offset?: number) {
    this.filters = filters
    this.order = order
    this.limit = limit
    this.offset = offset
  }

  hasFilters() {
    return this.filters.length > 0
  }

  hasOrder() {
    return this.order != null
  }
}
