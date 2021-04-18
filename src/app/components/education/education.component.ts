import {Component, OnInit} from '@angular/core';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    AOS.init();
  }

}
