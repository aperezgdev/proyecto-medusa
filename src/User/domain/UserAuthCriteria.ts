import { Criteria } from '../../Shared/domian/Criteria/Criteria.js'
import { Filter } from '../../Shared/domian/Criteria/Filter.js'
import { FilterOperator } from '../../Shared/domian/Criteria/FilterOperator.js'
import { Order } from '../../Shared/domian/Criteria/Order.js'
import { OrderType } from '../../Shared/domian/Criteria/OrderType.js'

export class UserAuthCriteria extends Criteria {
  constructor(usuario: string, contrasena: string) {
    super([
      new Filter('usuario', FilterOperator.EQUAL, usuario),
      new Filter('contrasena', FilterOperator.EQUAL, contrasena)
    ], new Order('usuario', OrderType.NONE))
  }
}
