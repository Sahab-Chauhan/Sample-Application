import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 public userName: string='amit';

  constructor() { }

  ngOnInit(): void {
  }
  onshow(event:any): void {
   // console.log(event);
   alert(event.target.innerHTML);
  }

}
