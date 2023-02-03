import { OrderType } from './OrderType.js'

export class Order {
  readonly orderBy: string
  readonly orderType: OrderType

  constructor(orderBy: string, orderType: OrderType) {
    this.orderBy = orderBy
    this.orderType = orderType
  }

  isAsc() {
    return this.orderType === OrderType.ASC
  }

  isDesc() {
    return this.orderType === OrderType.DESC
  }
}
