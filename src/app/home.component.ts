import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messages: string[] = [];

  constructor() { }

  ngOnInit(): void {
     this.messages = ["Welcome!", "Latest News", "Important Update"];
  }

  closePopup(message: string) {
    this.messages = this.messages.filter(m => m !== message);
  }

}
