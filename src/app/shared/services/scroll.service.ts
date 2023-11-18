import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private scrollSubject = new Subject<string>();

  scrollToSection(section: string): void {
    this.scrollSubject.next(section);
  }

  getScrollObservable() {
    return this.scrollSubject.asObservable();
  }
}