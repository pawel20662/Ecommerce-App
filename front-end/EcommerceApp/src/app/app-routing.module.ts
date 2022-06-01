import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SendOpinionComponent} from "./Component/send-opinion/send-opinion.component";
import {ContactComponent} from "./Component/contact/contact.component";
import {MainPageComponent} from "./Component/main-page/main-page.component";
import {NewWineComponent} from "./Component/new-wine/new-wine.component";
import {NavbarComponent} from "./Component/navbar/navbar.component";
import {SingInComponent} from "./Component/sing-in/sing-in.component";
import {PanelAdminComponent} from "./Component/panel-admin/panel-admin.component";
import {AdminAllWinesComponent} from "./Component/admin-all-wines/admin-all-wines.component";
import {AddwineComponent} from "./Component/addwine/addwine.component";
import {AllOpinionComponent} from "./Component/all-opinion/all-opinion.component";
import {UpdateWineComponent} from "./Component/update-wine/update-wine.component";
import {WhiteWineComponent} from "./Component/white-wine/white-wine.component";
import {RedWineComponent} from "./Component/red-wine/red-wine.component";
import {RoseWineComponent} from "./Component/rose-wine/rose-wine.component";
import {DessertWineComponent} from "./Component/dessert-wine/dessert-wine.component";
import {SparklingWineComponent} from "./Component/sparkling-wine/sparkling-wine.component";


const routes: Routes = [
  {path: `all-wine`, component: NewWineComponent},
  { path: 'send-opinion', component: SendOpinionComponent},
  { path: 'contact', component: ContactComponent},
  {path: 'sing-in', component: SingInComponent},
  {path: 'admin-panel', component: PanelAdminComponent},
  {path: 'admin-panel/allWines', component: AdminAllWinesComponent},
  {path: 'admin-panel/addWine', component: AddwineComponent},
  {path: 'admin-panel/allOpinion', component: AllOpinionComponent},
  {path: 'updateWine/:id', component: UpdateWineComponent},
  {path: `admin-panel/allOpinion/addWine`, redirectTo: 'admin-panel/addWine' },
  {path: 'admin-panel/addWine/allOpinion', redirectTo: 'admin-panel/allOpinion'},
  {path: 'white-wine', component: WhiteWineComponent},
  {path: 'red-wine', component: RedWineComponent},
  {path: 'rose-wine', component: RoseWineComponent},
  {path: 'dessert-wine', component: DessertWineComponent},
  {path: 'sparkling-wine', component: SparklingWineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
