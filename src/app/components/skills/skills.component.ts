import {Component, OnInit} from '@angular/core';
import {SwiperOptions} from 'swiper';
// @ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  slideData: Array<any> = [
    {
      id: 1,
      url: 'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg',
      alt: 'Spring Logo',
    },
    {
      id: 2,
      url: 'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg',
      alt: 'Spring Logo',
    }, {
      id: 3,
      url: 'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg',
      alt: 'Spring Logo',
    },
  ];
  config: SwiperOptions = {
    autoplay: {
      delay: 600,
      disableOnInteraction: false
    },
    speed: 800,
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
      slideShadows: true,
      rotate: 15,
      stretch: 15,
      depth: 5,
      modifier: 5
    }
  };

  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    AOS.init();
  }

}
