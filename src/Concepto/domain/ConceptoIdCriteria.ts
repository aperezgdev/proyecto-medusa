import { Criteria } from '../../Shared/domian/Criteria/Criteria'
import { Filter } from '../../Shared/domian/Criteria/Filter'
import { FilterOperator } from '../../Shared/domian/Criteria/FilterOperator'
import { Order } from '../../Shared/domian/Criteria/Order'
import { OrderType } from '../../Shared/domian/Criteria/OrderType'

export class ConceptoIdCriteria extends Criteria {
  constructor(idConcepto: string) {
    super([new Filter('id', FilterOperator.EQUAL, idConcepto)], new Order('', OrderType.DESC))
  }
}
