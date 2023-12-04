import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    public markedData: string = '';

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.fetchMarkdownFile('assets/site/contact.md');
    }

    fetchMarkdownFile(path: string): void {
      this.http.get(path, { responseType: 'text' })
        .subscribe((data: string) => {
          this.markedData = data;
        });
    }

}
