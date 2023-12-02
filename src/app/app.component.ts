import { Component, ViewEncapsulation } from '@angular/core';
import 'lodash';

declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'Bitcoin Is For Everyone 2024';

  constructor() {
    console.log(_.random(1, 100));
  }

}
