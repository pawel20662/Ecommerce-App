import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SendOpinionComponent} from "./Component/send-opinion/send-opinion.component";
import {ContactComponent} from "./Component/contact/contact.component";
import {MainPageComponent} from "./Component/main-page/main-page.component";
import {NewWineComponent} from "./Component/new-wine/new-wine.component";
import {NavbarComponent} from "./Component/navbar/navbar.component";
import {SingInComponent} from "./Component/sing-in/sing-in.component";


const routes: Routes = [
  {path: `all-wine`, component: NewWineComponent},
  { path: 'send-opinion', component: SendOpinionComponent},
  { path: 'contact', component: ContactComponent},
  {path: 'sing-in', component: SingInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
