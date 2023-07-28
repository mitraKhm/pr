import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div>
    <app-donut-single></app-donut-single>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('i think this is created');
  
  }
  title = 'my-first-project';
  massage!: string;
  newMassage!: string
  updateMassage(event: Event) {
    const { value } = event.target as HTMLInputElement
    console.log(value);
    this.newMassage = value
   
  }
  
}
