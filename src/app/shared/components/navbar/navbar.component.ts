import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private scrollService: ScrollService) { }

  scrollToSection(section: string): void {
    this.scrollService.scrollToSection(section);
  }
}
