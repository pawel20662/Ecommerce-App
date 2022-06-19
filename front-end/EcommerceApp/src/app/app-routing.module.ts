import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SendOpinionComponent} from "./component/send-opinion/send-opinion.component";
import {ContactComponent} from "./component/contact/contact.component";
import {NewWineComponent} from "./component/new-wine/new-wine.component";
import {SingInComponent} from "./component/sing-in/sing-in.component";
import {PanelAdminComponent} from "./component/panel-admin/panel-admin.component";
import {AdminAllWinesComponent} from "./component/admin-all-wines/admin-all-wines.component";
import {AddwineComponent} from "./component/addwine/addwine.component";
import {AllOpinionComponent} from "./component/all-opinion/all-opinion.component";
import {UpdateWineComponent} from "./component/update-wine/update-wine.component";
import {WhiteWineComponent} from "./component/white-wine/white-wine.component";
import {RedWineComponent} from "./component/red-wine/red-wine.component";
import {RoseWineComponent} from "./component/rose-wine/rose-wine.component";
import {DessertWineComponent} from "./component/dessert-wine/dessert-wine.component";
import {SparklingWineComponent} from "./component/sparkling-wine/sparkling-wine.component";
import {RegisterUserComponent} from "./component/register-user/register-user.component";
import {AllUsersComponent} from "./component/all-users/all-users.component";
import {DetailsWineComponent} from "./component/details-wine/details-wine.component";


const routes: Routes = [
  {path: `all-wine`, component: NewWineComponent},
  {path: `details/:id`, component: DetailsWineComponent},
  { path: 'contact', component: ContactComponent},
  {path: 'send-opinion', component: SendOpinionComponent},
  {path: 'sing-in', component: SingInComponent},
  {path: 'admin-panel', component: PanelAdminComponent},
  {path: 'admin-panel/allWines', component: AdminAllWinesComponent},
  {path: 'admin-panel/allUsers', component: AllUsersComponent},
  {path: 'admin-panel/addWine', component: AddwineComponent},
  {path: 'admin-panel/allOpinion', component: AllOpinionComponent},
  {path: 'updateWine/:id', component: UpdateWineComponent},
  {path: `admin-panel/allOpinion/addWine`, redirectTo: 'admin-panel/addWine' },
  {path: 'admin-panel/addWine/allOpinion', redirectTo: 'admin-panel/allOpinion'},
  {path: `admin-panel/allOpinion/allUsers`, redirectTo: 'admin-panel/allUsers'},
  {path: `admin-panel/allUsers/allOpinion`, redirectTo: 'admin-panel/allOpinion'},
  {path: `admin-panel/allUsers/addWine`, redirectTo: 'admin-panel/addWine'},
  {path: `admin-panel/addWine/allUsers`, redirectTo: 'admin-panel/allUsers'},
  {path: 'white-wine', component: WhiteWineComponent},
  {path: 'red-wine', component: RedWineComponent},
  {path: 'rose-wine', component: RoseWineComponent},
  {path: 'dessert-wine', component: DessertWineComponent},
  {path: 'sparkling-wine', component: SparklingWineComponent},
  {path: 'register-user', component: RegisterUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
