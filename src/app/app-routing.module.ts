import {EducationComponent} from './components/education/education.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkillsComponent} from "./components/skills/skills.component";
import {ContactComponent} from "./components/contact/contact.component";
import {CertificatComponent} from "./components/certificat/certificat.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent, data: {animation: 'HomePage'}
  },
  {
    path: "about", component: AboutComponent,
  },
  {
    path: "education", component: EducationComponent, data: {animation: 'education'}
  },
  {
    path: "skills", component: SkillsComponent,
  },
  {
    path: "contact", component: ContactComponent,
  },
  {
    path: "certificats", component: CertificatComponent, data: {animation: 'certificats'}
  },
  {
    path: "**", component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
