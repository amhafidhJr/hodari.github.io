import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompileComponent } from './compile/compile/compile.component';
import { TeamComponent } from './our-team/team/team.component';
import { ContactComponent } from './contact-us/contact/contact.component';
import { HomeComponent } from './home/home/home.component';
import { NewsComponent } from './latest-news/news/news.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'page', component: NewsComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'project', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
