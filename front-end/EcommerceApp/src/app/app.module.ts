import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { ContactComponent } from './component/contact/contact.component';
import { SendOpinionComponent } from './component/send-opinion/send-opinion.component';
import { NewWineComponent } from './component/new-wine/new-wine.component';
import { FooterComponent } from './component/footer/footer.component';
import {MainPageComponent} from "./component/main-page/main-page.component";
import { SingInComponent } from './component/sing-in/sing-in.component';
import {MatInputModule} from '@angular/material/input';
import { PanelAdminComponent } from './component/panel-admin/panel-admin.component';
import {HttpClientModule} from "@angular/common/http";
import { AdminMenuComponent } from './component/admin-menu/admin-menu.component';
import { AdminAllWinesComponent } from './component/admin-all-wines/admin-all-wines.component';
import { AddwineComponent } from './component/addwine/addwine.component';
import {MatRadioModule} from '@angular/material/radio';
import { AllOpinionComponent } from './component/all-opinion/all-opinion.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateWineComponent } from './component/update-wine/update-wine.component';
import { WhiteWineComponent } from './component/white-wine/white-wine.component';
import { RedWineComponent } from './component/red-wine/red-wine.component';
import { RoseWineComponent } from './component/rose-wine/rose-wine.component';
import { DessertWineComponent } from './component/dessert-wine/dessert-wine.component';
import { SparklingWineComponent } from './component/sparkling-wine/sparkling-wine.component';
import {MatIconModule} from "@angular/material/icon";
import { RegisterUserComponent } from './component/register-user/register-user.component';
import { AllUsersComponent } from './component/all-users/all-users.component';
import { DetailsWineComponent } from './component/details-wine/details-wine.component';
import { ShoppingCardComponent } from './component/shopping-card/shopping-card.component';
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
    AllOpinionComponent,
    UpdateWineComponent,
    WhiteWineComponent,
    RedWineComponent,
    RoseWineComponent,
    DessertWineComponent,
    SparklingWineComponent,
    RegisterUserComponent,
    AllUsersComponent,
    DetailsWineComponent,
    ShoppingCardComponent,
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
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
