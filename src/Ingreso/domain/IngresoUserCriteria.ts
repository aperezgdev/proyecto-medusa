import { Criteria } from '../../Shared/domian/Criteria/Criteria.js'
import { Filter } from '../../Shared/domian/Criteria/Filter.js'
import { FilterOperator } from '../../Shared/domian/Criteria/FilterOperator.js'
import { Order } from '../../Shared/domian/Criteria/Order.js'
import { OrderType } from '../../Shared/domian/Criteria/OrderType.js'

export class IngresoUserCriteria extends Criteria {
  constructor(idUsuario: string) {
    super(
      [new Filter('user.id', FilterOperator.EQUAL, idUsuario)],
      new Order('fecha', OrderType.DESC)
    )
  }
}
