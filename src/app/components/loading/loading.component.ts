import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  // templateUrl: './loading.component.html',
  template: '<mat-progress-bar mode="query"></mat-progress-bar>',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
