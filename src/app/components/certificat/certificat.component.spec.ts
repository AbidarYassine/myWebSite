import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatComponent } from './certificat.component';

describe('CertificatComponent', () => {
  let component: CertificatComponent;
  let fixture: ComponentFixture<CertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
