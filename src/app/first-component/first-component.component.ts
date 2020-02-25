import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  constructor() { }

  // tslint:disable-next-line: quotemark
  title = `First-Component's Title`;
  ngOnInit(): void { }
}
