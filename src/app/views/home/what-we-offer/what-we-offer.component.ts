import { Component, OnInit, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss']
})
export class WhatWeOfferComponent implements OnInit {

  isCollapsed: boolean[] = [false, true, true, true];

  accordionItems = [
    { title: 'Informed Decision-Making', content: 'Vega equips your team with instant access to critical data and best practice insights, fostering data-driven choices that advance your digital journey.' },
    { title: 'Enhanced Data Reliability', content: 'Through advanced data cleansing and unification, Vega ensures the quality and consistency of your data, underpinning effective digital processes.' },
    { title: 'Efficiency Boost', content: 'By automating routine tasks and reducing manual processes, Vega liberates valuable resources, allowing your team to concentrate on strategic digital advancements.' },
    { title: 'Adaptability and Growth', content: 'Vega\'s flexibility and scalability seamlessly align with your evolving digital requirements, providing the agility necessary for the dynamic nature of digital transformation.' }
  ];

  constructor(private scrollService: ScrollService, private el: ElementRef) { }

  ngOnInit(): void {
    this.scrollService.getScrollObservable().subscribe((section: string) => {
      this.scrollToSection(section);
    });
  }

  scrollToSection(section: string): void {
    const element = this.el.nativeElement.querySelector(`#${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleCollapse(index: number) {
    this.isCollapsed[index] = !this.isCollapsed[index];
    this.isCollapsed.map((ele, i) => {
      if (i !== index) {
        this.isCollapsed[i] = true;
      }
    });
  }

}
