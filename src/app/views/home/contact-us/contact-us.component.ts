import { Component, OnInit, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/shared/services/contact.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { CountryISO, SearchCountryField, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  //Form Variables
  createRequestForm: FormGroup;
  submitted = false;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.Egypt, CountryISO.SaudiArabia];

  //Form Select Options
  subjects = [
    { id: '1', value: 'General Inquiry' },
    { id: '2', value: 'Demo Request' },
    { id: '3', value: 'Pricing Inquiry' },
    { id: '4', value: 'Partnership' },
  ];

  constructor(private ContactService: ContactService, private toastr: ToastrService, private fb: FormBuilder, private scrollService: ScrollService, private el: ElementRef) {
    //Form Group
    this.createRequestForm = this.fb.group({
      subject: new FormControl('General Inquiry', Validators.required),
      fullName: new FormControl(null, [Validators.required, this.spacesOnlyValidator]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required, this.spacesOnlyValidator]),
    });
  }

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

  get subject() {
    return this.createRequestForm.get('subject')!;
  }
  get body() {
    return this.createRequestForm.get('body')!;
  }
  get fullName() {
    return this.createRequestForm.get('fullName')!;
  }
  get email() {
    return this.createRequestForm.get('email')!;
  }
  get phone() {
    return this.createRequestForm.get('phone')!;
  }

  public spacesOnlyValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;

    if (/^\s+$/.test(value)) {
      return { spacesOnly: true };
    }

    return null;
  }

  filtterData(array: any, phoneNum: string) {
    delete array.phone;
    var number: String = phoneNum;
    var x = number.replace(/\s/g, '');
    array.phone = x;
    return array;
  }

  onSubmit() {
    this.submitted = true;
    var filteredData = this.filtterData(this.createRequestForm.value, this.createRequestForm.value.phone.internationalNumber);

    this.ContactService.createRequest('https://www.qeema.net/api/v1/contact', filteredData).subscribe(
      response => {
        this.toastr.success('Your request sent successfully!', 'Success');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      error => {
        this.toastr.error('Failed to send your request!', 'Failed');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    );
    // this.createRequestForm.controls['body'].reset();
  }

}
