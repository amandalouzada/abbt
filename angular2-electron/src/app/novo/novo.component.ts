import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-novo',
  template: require('./novo.component.html'),
  styles: [require('./novo.component.scss')]
})
export class NovoComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
