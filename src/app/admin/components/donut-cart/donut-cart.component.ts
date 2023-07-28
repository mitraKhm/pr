import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-cart',
  templateUrl: './donut-cart.component.html',
  styleUrls: ['./donut-cart.component.scss']
})
export class DonutCartComponent {
  @Input() donut!:Donut

}
