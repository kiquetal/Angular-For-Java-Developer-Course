import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";

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

  startTime:string = "";

  ngOnInit(): void {

    this.startTime = new Date().toISOString();
  }


}
