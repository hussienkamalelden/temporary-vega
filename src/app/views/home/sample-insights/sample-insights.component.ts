import { Component, OnInit, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-sample-insights',
  templateUrl: './sample-insights.component.html',
  styleUrls: ['./sample-insights.component.scss']
})
export class SampleInsightsComponent implements OnInit {

  insights = [
    { title: 'Insightful Dashboard', content: 'Building multi-level insightful dashboard that will decision makers.<br><span class="special">30+</span> reports and KPIs built based on best practices and current requirements.', img: "../../../../assets/images/home/sample-insights/insightful_dashboard.png" },
    { title: 'Track Purchasing Life Cycle Versus SLA', content: 'Innovative way of displaying and visualizing Stages of Procurement lifecycle.', img: "../../../../assets/images/home/sample-insights/track_purchasing.png" },
    { title: 'CAPEX/OPEX Spending & Budget', content: 'Track CAPEX/OPEX spending, budget total, and per department. Plus Controlling Procurement Channels used.', img: "../../../../assets/images/home/sample-insights/spending_budget.png" },
    { title: 'Top Suppliers Purchasing And Savings', content: 'Track Top suppliers versus savings, useful at negotiations.', img: "../../../../assets/images/home/sample-insights/top-suppliers.png" },
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

}
