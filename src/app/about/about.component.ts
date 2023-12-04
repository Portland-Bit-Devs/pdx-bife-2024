import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

     public markedData: string = '';

     constructor(private http: HttpClient) {}

     ngOnInit(): void {
       this.fetchMarkdownFile('assets/site/about.md');
     }

     fetchMarkdownFile(path: string): void {
       this.http.get(path, { responseType: 'text' })
         .subscribe((data: string) => {
           this.markedData = data;
         });
     }

}
