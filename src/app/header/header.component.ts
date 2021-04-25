import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pageRequest:number = 1;

  @Output()
  pageEventEmitter = new EventEmitter<number>();

  onPageChange = (page: number) => {
    this.pageRequest=page;
    console.log(this.pageRequest);
    this.pageEventEmitter.emit(page);
  }

}
