import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  email = '';
  subject = '';
  message = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  log(email: any): void {
    console.log(email);
  }

  submitForm(f: any): void {
    console.log(f.value);
  }
}
