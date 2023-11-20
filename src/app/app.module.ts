import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './views/home/header/header.component';
import { WhatWeOfferComponent } from './views/home/what-we-offer/what-we-offer.component';
import { SampleInsightsComponent } from './views/home/sample-insights/sample-insights.component';
import { OurExpertsComponent } from './views/home/our-experts/our-experts.component';
import { ContactUsComponent } from './views/home/contact-us/contact-us.component';
import { HomeComponent } from './views/home/home.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    WhatWeOfferComponent,
    SampleInsightsComponent,
    OurExpertsComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxIntlTelInputModule,
    HttpClientModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),

  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
