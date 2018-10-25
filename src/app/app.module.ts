import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import {
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {MotoComponent} from './moto/moto.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContributeComponent} from './contribute/contribute.component';
import {ThanksComponent} from './thanks/thanks.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {AdminModule} from './admin/admin.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SatPopoverModule} from '@ncstate/sat-popover';
import {PopupComponent} from './popup/popup.component';
import {DetailsComponent} from './details/details.component';
import {ContactComponent} from './contact/contact.component';
import {TeamComponent} from './team/team.component';
import {LocateComponent} from './locate/locate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    MotoComponent,
    GalleryComponent, DetailsComponent,
    ContributeComponent,
    ThanksComponent,
    LocateComponent,
    ContactComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SatPopoverModule,
    CoreModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
