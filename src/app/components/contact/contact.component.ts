import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  email:string='';
  subject:string='';
  message:string='';
  constructor() {}

  ngOnInit(): void {}
  log(email: any) {
    console.log(email);
  }
}
