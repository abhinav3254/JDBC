import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent {

  @Input() stat: Stat | undefined;


}

export interface Stat {
  name: string
  amount: string
  data: string
  change: string
}

