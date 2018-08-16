import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatExpansionModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatProgressSpinnerModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatTabsModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { RootComponent } from './views/root/root.component';
import { ProfileComponent } from './views/root/rootViews/profile/profile.component';
import { HomeComponent } from './views/root/rootViews/home/home.component';
import { MessagesComponent } from './views/root/rootViews/messages/messages.component';
import { ProfileFragmentComponent } from './views/root/rootviews/profile/profileViews/profile-fragment/profile-fragment.component';
import { SettingsFragmentComponent } from './views/root/rootviews/profile/profileViews/settings-fragment/settings-fragment.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AgmCoreModule } from '@agm/core';
import {GMapModule} from "primeng/gmap";
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    RootComponent,
    ProfileComponent,
    HomeComponent,
    MessagesComponent,
    ProfileFragmentComponent,
    SettingsFragmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    MatSliderModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    GMapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDimPFPJbEEwjfE3ro14JhNk_RYooci-Gs'
    }),
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
