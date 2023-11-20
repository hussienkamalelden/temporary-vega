import { Component, OnInit, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  scrollToSections(section: string): void {
    this.scrollService.scrollToSection(section);
  }

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

}
