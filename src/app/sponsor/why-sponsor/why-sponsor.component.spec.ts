import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhysponsorComponent } from './whysponsor.component';

describe('WhysponsorComponent', () => {
  let component: WhysponsorComponent;
  let fixture: ComponentFixture<WhysponsorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhysponsorComponent]
    });
    fixture = TestBed.createComponent(WhysponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
