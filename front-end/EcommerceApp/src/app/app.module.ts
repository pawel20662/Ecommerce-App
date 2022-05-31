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
import { PanelAdminComponent } from './component/panel-admin/panel-admin.component';
import {HttpClientModule} from "@angular/common/http";
import { AdminMenuComponent } from './component/admin-menu/admin-menu.component';
import { AdminAllWinesComponent } from './component/admin-all-wines/admin-all-wines.component';
import { AddwineComponent } from './component/addwine/addwine.component';
import {MatRadioModule} from '@angular/material/radio';
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
    PanelAdminComponent,
    AdminMenuComponent,
    AdminAllWinesComponent,
    AddwineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    HttpClientModule,
    HttpClientModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
