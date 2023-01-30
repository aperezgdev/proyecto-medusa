import { type OrderType } from './OrderType'

export class Order {
  readonly orderBy: string
  readonly orderType: OrderType

  constructor(orderBy: string, orderType: OrderType) {
    this.orderBy = orderBy
    this.orderType = orderType
  }
}
