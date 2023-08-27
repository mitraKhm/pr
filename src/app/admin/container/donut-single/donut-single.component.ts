import { Component,Output,EventEmitter } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.scss']
})
export class DonutSingleComponent {
  onCreat(donut: Donut){
        console.log('on creat', donut)
  }
  
  @Output() creat = new EventEmitter<Donut>()

}
