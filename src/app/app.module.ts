
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {EducationComponent} from './components/education/education.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ContactComponent} from './components/contact/contact.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CertificatComponent } from './components/certificat/certificat.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list'
import {MatDividerModule} from '@angular/material/divider'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SliderComponent } from './components/slider/slider.component';
import { BoxSettingComponent } from './components/box-setting/box-setting.component';
import {MatFormFieldModule}  from  '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    CertificatComponent,
    NotFoundComponent,
    SliderComponent,
    BoxSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
