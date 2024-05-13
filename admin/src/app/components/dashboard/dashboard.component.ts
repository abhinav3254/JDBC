import { Component, OnInit } from '@angular/core';
import statJson from '../../../assets/json/stats.json';
import topSellingJson from '../../../assets/json/most-selling-products.json';
import topCustomerJson from '../../../assets/json/top-customers.json';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  years: Year[] | undefined;

  selectedYear: any = 0;

  stats: Stat[] = statJson;
  topSelling: TopSelling[] = topSellingJson;
  topCustomers: TopCustomer[] = topCustomerJson;

  ngOnInit(): void {
    this.years = [];
    for (let year = 2024; year > 2009; year--) {
      this.years.push({ year: year });
    }
  }

  onYearChange() {
    console.log(this.selectedYear.year);
  }

}

interface Year {
  year: number
}


export interface Stat {
  name: string
  amount: string
  data: string
  change: string
}

export interface TopSelling {
  id: number,
  name: string,
  sales: number,
  img: string
}


export interface TopCustomer {
  id: number
  name: string
  orders: number
  img: string
}
