import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutListComponent } from './container/donut-list/donut-list.component';
import { DonutCartComponent } from './components/donut-cart/donut-cart.component';
import { DonutSingleComponent } from './container/donut-single/donut-single.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';
import { FormsModule } from '@angular/forms';
import { DonutService } from './services/donut.service';


@NgModule({
  declarations: [
    DonutListComponent,
    DonutCartComponent,
    DonutSingleComponent,
    DonutFormComponent,
  ],
  imports: [
    CommonModule, FormsModule
  ] ,
  providers: [DonutService],
  exports:[DonutListComponent, DonutSingleComponent]
})
export class AdminModule {
  
 }
 