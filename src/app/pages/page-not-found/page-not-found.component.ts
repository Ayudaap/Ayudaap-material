import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

  isSmallScreen: boolean = this.breakpointObserver.isMatched('(max-width: 599px)');

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Large,
      Breakpoints.Web
    ]).subscribe(result => {
      // this.isSmallScreen = result.matches;
      
    });
  }

}
