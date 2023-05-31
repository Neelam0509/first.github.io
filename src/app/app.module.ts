import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { FormsModule } from "@angular/forms";
import { ConvertPipe } from './convert.pipe';
import { HighlightDirective } from './highlight.directive';
import { StarComponent } from './star/star.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule,Routes} from "@angular/router";
import { NotfoundComponent } from './notfound/notfound.component';
const routes : Routes=[
  {path:'home',component:HomeComponent },
  {path:'profile',component:ProfileComponent},
  {path:'products',component:ProductListComponent},
  {path:'',redirectTo:'/products',pathMatch:'prefix'},
  {path:'**',component:NotfoundComponent}
]
@NgModule({
  declarations:[
    AppComponent,
    ProductListComponent,
    ConvertPipe,
    HighlightDirective,
    StarComponent,
    HomeComponent,
    ProfileComponent,
    NotfoundComponent
 ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[],
  bootstrap:[
    AppComponent
  ]

})
export class AppModule{}
