import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.scss']
})
export class DonutSingleComponent implements OnInit {

  donut!:Donut

  onCreat(donut: Donut){
        console.log('on creat', donut)
  }
  
  @Output() creat = new EventEmitter<Donut>()

  ngOnInit(): void {
    this.donut = {
      id: '11',
      name: 'just chocolate',
      icon: '',
      price: 119,
      promo:'limited',
      description:' sdfsdf fsdfs'
    }
  }

}
