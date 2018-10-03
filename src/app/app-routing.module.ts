import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {MotoComponent} from './moto/moto.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContributeComponent} from './contribute/contribute.component';
import {ThanksComponent} from './thanks/thanks.component';
import {DetailsComponent} from './details/details.component';
import {ContactComponent} from './contact/contact.component';
import {TeamComponent} from './team/team.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'אודות', component: AboutComponent },
  { path: 'המצע', component: MotoComponent },
  { path: 'גלריה', component: GalleryComponent },
  { path: 'פירוט', component: DetailsComponent },
  { path: 'תרומות', component: ContributeComponent },
  { path: 'תודה', component: ThanksComponent },
  { path: 'צור_קשר', component: ContactComponent },
  { path: 'הנבחרת', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
