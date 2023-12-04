import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Bitcoin Is For Everyone 2024';

  constructor() {

  }

  blendColors(color1: string, color2: string, percentage: number): string {
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);

    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    const r = Math.round(r1 * (1 - percentage) + r2 * percentage);
    const g = Math.round(g1 * (1 - percentage) + g2 * percentage);
    const b = Math.round(b1 * (1 - percentage) + b2 * percentage);

    return `rgb(${r},${g},${b})`;
  }

}
