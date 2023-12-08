import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messages: string[] = ["Welcome!", "Latest News", "Important Update"];

  constructor() { }

  ngOnInit(): void {
     this.messages = this.messages.filter(msg => !sessionStorage.getItem(`dismissed-${msg}`));
  }

  closePopup(message: string) {
    sessionStorage.setItem(`dismissed-${message}`, 'true');
    this.messages = this.messages.filter(m => m !== message)
  }

}
