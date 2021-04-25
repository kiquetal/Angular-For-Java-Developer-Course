import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {Page2Component} from "./page2/page2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-For-Java';

  @ViewChild('footer',{static:true})
  footerComponent: FooterComponent;
  updateLastAccessed() {
    this.footerComponent.lastAccessed = new Date().toISOString();
  }

  @ViewChild('page2',{static:true})
  page2Component: Page2Component;

  startTime:string = "";

  ngOnInit(): void {

    this.startTime = new Date().toISOString();
  }


  hitCounter(page) {
    if (page==2){
      this.page2Component.hitCounter();
    }
  }
}
