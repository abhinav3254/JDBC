import { Component, Input } from '@angular/core';
import ordersJson from '../../../../assets/json/recent-orders.json';


@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {

  orders: Order[] = ordersJson;

  checkIsPending(value: string): boolean {
    if (value.toLowerCase() === 'pending') {
      return true;
    }
    return false;
  }

  checkIsCompleted(value: string): boolean {
    if (value.toLowerCase() === 'completed') {
      return true;
    }
    return false;
  }


  checkIsShipped(value: string): boolean {
    if (value.toLowerCase() === 'shipped') {
      return true;
    }
    return false;
  }
}

export interface Order {
  id: string
  customer: string
  date: string
  status: string
  productName: string
  img: string
}
