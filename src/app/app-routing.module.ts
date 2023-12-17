import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompileComponent } from "./compile/compile/compile.component";
import { TeamComponent } from "./our-team/team/team.component";
import { ContactComponent } from "./contact-us/contact/contact.component";
import { HomeComponent } from "./home/home/home.component";
import { NewsComponent } from "./latest-news/news/news.component";
import { ProjectComponent } from "./project/project/project.component";
import { DonationComponent } from "./donation/donation/donation.component";
import { FaqsComponent } from "./faqs/faqs/faqs.component";
import { AboutComponent } from "./about/about/about.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "team", component: TeamComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "projects", component: ProjectComponent },
  { path: "donate", component: DonationComponent },
  { path: "faqs", component: FaqsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
