import { Criteria } from '../../Shared/domian/Criteria/Criteria'
import { Filter } from '../../Shared/domian/Criteria/Filter'
import { FilterOperator } from '../../Shared/domian/Criteria/FilterOperator'
import { Order } from '../../Shared/domian/Criteria/Order'
import { OrderType } from '../../Shared/domian/Criteria/OrderType'

export class UserIdCriteria extends Criteria {
  constructor(id: string) {
    super([new Filter('_id', FilterOperator.EQUAL, id)], new Order('usuario', OrderType.NONE))
  }
}
