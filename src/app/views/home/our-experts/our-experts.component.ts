import { Component, OnInit, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-our-experts',
  templateUrl: './our-experts.component.html',
  styleUrls: ['./our-experts.component.scss']
})
export class OurExpertsComponent implements OnInit {

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

  experts = [
    { title: 'Industry Expertise', content: 'Our team consists of Subject Matter Experts with over a decade of experience in various industries, including telecommunications, technology, and more.', icon: "icon-industry_expertise_1" },
    { title: 'Industry Experience', content: 'We’ve worked with leading market operators and vendors gaining valuable insights and experience.', icon: "icon-industry_expertise_2" },
    { title: 'Collaboration', content: 'We provide comprehensive support throughout the project\'s life-cycle. Our team works closely with field and operations task forces to drive transformative change.', icon: "icon-collaboration" },
    { title: 'Expansive Capabilities', content: 'Our consultants possess expandable capabilities, bolstered by a vast network of Business and Technology experts.', icon: "icon-expansive_capabilities" },
  ];
}
