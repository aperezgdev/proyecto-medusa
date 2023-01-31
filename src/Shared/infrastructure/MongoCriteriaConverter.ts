import { FilterOperator } from '../domian/Criteria/FilterOperator'
import { type Filter } from '../domian/Criteria/Filter'
import { type Criteria } from '../domian/Criteria/Criteria'
import { type Order } from '../domian/Criteria/Order'

type MongoFilterOperator = '$eq' | '$ne' | '$gt' | '$lt' | '$regex'
type MongoFilterValue = boolean | string | number
type MongoFilterOperation = { [operator in MongoFilterOperator]?: MongoFilterValue }
type MongoFilter = Record<string, MongoFilterOperation> | Record<string, { $not: MongoFilterOperation }>
type MongoDirection = 1 | -1
type MongoSort = Record<string, MongoDirection>

interface MongoQuery {
  filter: MongoFilter
  sort: MongoSort
  skip: number
  limit: number
}

type TransformerFunction<T, K> = (value: T) => K

export class MongoCriteriaConverter {
  private readonly filterTransformers: Map<FilterOperator, TransformerFunction<Filter, MongoFilter>>

  constructor() {
    this.filterTransformers = new Map<FilterOperator, TransformerFunction<Filter, MongoFilter>>([
      [FilterOperator.EQUAL, this.equalFilter],
      [FilterOperator.NOT_EQUAL, this.notEqualFilter],
      [FilterOperator.GT, this.greaterThanFilter],
      [FilterOperator.LT, this.lowerThanFilter],
      [FilterOperator.CONTAINS, this.containsFilter],
      [FilterOperator.NOT_CONTAINS, this.notContainsFilter]
    ])
  }

  public convert(criteria: Criteria): MongoQuery {
    return {
      filter: criteria.hasFilters() ? this.generateFilter(criteria.filters) : {},
      sort: criteria.hasOrder() ? this.generateSort(criteria.order) : { _id: -1 },
      skip: criteria.offset ?? 0,
      limit: criteria.limit ?? 0
    }
  }

  protected generateFilter(filters: Filter[]): MongoFilter {
    const filter = filters.map(filter => {
      const transformer = this.filterTransformers.get(filter.filterOperator)

      if (transformer == null) {
        throw Error(`Unexpected operator value ${filter.filterOperator}`)
      }

      return transformer(filter)
    })

    return Object.assign({}, ...filter)
  }

  protected generateSort(order: Order): MongoSort {
    return {
      [order.orderBy === 'id' ? '_id' : order.orderBy]: order.isAsc() ? 1 : -1
    }
  }

  private equalFilter(filter: Filter): MongoFilter {
    return { [filter.filterBy]: { $eq: filter.value } }
  }

  private notEqualFilter(filter: Filter): MongoFilter {
    return { [filter.filterBy]: { $ne: filter.value } }
  }

  private greaterThanFilter(filter: Filter): MongoFilter {
    return { [filter.filterBy]: { $gt: filter.value } }
  }

  private lowerThanFilter(filter: Filter): MongoFilter {
    return { [filter.filterBy]: { $lt: filter.value } }
  }

  private containsFilter(filter: Filter): MongoFilter {
    return { [filter.filterBy]: { $regex: filter.value } }
  }

  private notContainsFilter(filter: Filter): MongoFilter {
    return { [filter.filterBy]: { $not: { $regex: filter.value } } }
  }
}
