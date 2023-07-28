import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';


@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.scss']
})
export class DonutFormComponent {
  icons:string[]=[
    'caramel-swirl',
    'glazed-fudge',
    'just-chovolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
  ]

  @Output() creat = new EventEmitter<Donut>()

  handleSubmit(form: NgForm){
        if(form.valid){
          console.log(form.value)
        }else{
          console.log('is invalid');
          
          form.form.markAllAsTouched()
        }
  }

}
