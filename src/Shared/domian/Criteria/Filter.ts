import { type FilterOperator } from './FilterOperator.js'

export class Filter {
  readonly filterBy: string
  readonly filterOperator: FilterOperator
  readonly value: string

  constructor(filterBy: string, filterOperator: FilterOperator, value: string) {
    this.filterBy = filterBy
    this.filterOperator = filterOperator
    this.value = value
  }
}
