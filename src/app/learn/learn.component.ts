import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loop-back',
  template: `
   <input #box 
      (keyup.enter)="addHero(box.value)"
      (blur)="addHero(box.value); box.value=''" >

   <button (click)="addHero(box.value);box.value=''">Ass</button>
   <ul>
    <li *ngFor='let i of lstHero'>{{i}}</li>
   </ul>
   `
})
export class LearnComponent implements OnInit {
  lstHero = ['abc','def','htl']
  constructor() { }

  ngOnInit() {
  }

  addHero(a){
    if(a)
      this.lstHero.push(a);
  }

}
