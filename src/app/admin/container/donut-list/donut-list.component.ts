import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model'

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.scss']
})
export class DonutListComponent implements OnInit {
  donut!: Donut;

  donuts!: Donut[];

  constructor() {
    
  }
  ngOnInit(): void {
    this.donuts = [
      {
        id: '11',
        name: 'just chocolate',
        icon: '',
        price: 119,
        promo:'limited',
        description:' sdfsdf fsdfs'
      },
      {
        id: '12',
        name: 'glazed fudge',
        icon: '',
        price: 200,
        promo:'new',
        description:'glazed sdfsdf fsdfs'
      },
      {
        id: '13',
        name: 'sweet one ',
        icon: '',
        price: 350,
        description:'sweet sdfsdf fsdfs  '
      }
    ]
    this.donut = this.donuts[0]
  }

}
