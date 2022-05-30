import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { ContactComponent } from './Component/contact/contact.component';
import { SendOpinionComponent } from './Component/send-opinion/send-opinion.component';
import { NewWineComponent } from './Component/new-wine/new-wine.component';
import { FooterComponent } from './component/footer/footer.component';
import {MainPageComponent} from "./Component/main-page/main-page.component";
import { SingInComponent } from './component/sing-in/sing-in.component';
import {MatInputModule} from '@angular/material/input';
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    SendOpinionComponent,
    SendOpinionComponent,
    NewWineComponent,
    FooterComponent,
    MainPageComponent,
    SingInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
