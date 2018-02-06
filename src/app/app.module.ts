import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';
import { MatToolbarModule, MatListModule, MatGridListModule, MatLineModule, MatCardModule, MatButtonModule, 
  MatIconModule, MatDialogModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule,
  MatSelectModule, MatProgressSpinnerModule, MatSliderModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'
import { RestangularModule, Restangular} from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import { baseURL } from './shared/baseurl';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatLineModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [ DishService,
  PromotionService,
  LeaderService,
  {provide: 'BaseURL', useValue: baseURL},
  ProcessHTTPMsgService ],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
