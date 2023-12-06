import { Component } from '@angular/core';

@Component({
  selector: 'why-sponsor',
  templateUrl: './why-sponsor.component.html',
  styleUrls: ['./why-sponsor.component.scss']
})
export class WhySponsorComponent {

  sectionHeader = {
    title: 'WHY SPONSOR?',
    content: 'Take your place as an industry leader at THE WORLD\'S LARGEST BITCOIN CONFERENCE. Showcase your brand and foster relationships at the most important location for thought leaders, builders, and digital asset professionals to network and connect.'
  }

  conferenceDetails = [
    {
      title: 'NETWORKING & COLLABORATION',
      content: 'Connect with industry leaders, potential clients, partners, and investors, build relationships and explore collaboration opportunities',
      image: 'networking.png'
    },
    {
      title: 'BRAND VISIBILITY & RECOGNITION',
      content: 'Increase brand exposure to thousands of bitcoin users, establish brand identity, and tap into media outlets for wider coverage.',
      image: 'brand.png'
    },
    {
      title: 'BUSINESS GROWTH & MARKET OPPORTUNITIES',
      content: 'Stay updated on trends, innovations, and market opportunities, fuel your business pipeline, and access a large focused audience.',
      image: 'growth.png'
    },
    {
      title: 'THOUGHT LEADERSHIP & INFLUENCE',
      content: 'Engage in exclusive content offerings, shape the direction of the industry, and establish thought leadership through panel discussions and presentations.',
      image: 'leadership.png'
    },
    {
      title: 'MARKET INSIGHTS & UNDERSTANDING',
      content: 'Gain valuable market insights, learn from experienced entrepreneurs, and understand regulatory and legal aspects of the bitcoin space.',
      image: 'market.png'
    },
    {
      title: 'PRODUCT SHOWCASE & INTEREST GENERATION',
      content: 'Demonstrate new products or services to a targeted audience actively seeking solutions–generating interest and interested leads.',
      image: 'product.png'
    }
  ];
}
