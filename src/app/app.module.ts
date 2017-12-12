import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {EditorComponent} from './editor/editor.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {fakeBackendProvider} from './_helpers/mock-backend';
import {AlertComponent} from './_directives/alert.component';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {routing} from './app.routing';
import {AuthGuard} from './_guards/auth.guard';
import {AlertService, AuthenticationService, CampaignService, UserService} from './_services/index';
import {FormsModule} from '@angular/forms';
import { CampaignviewerComponent } from './campaignviewer/campaignviewer.component';
import { PreviewComponent } from './shared/preview/preview.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RetailerListComponent } from './editor/retailer-list/retailer-list.component';
import {MatInputModule} from '@angular/material/input';
import { EditorFormComponent } from './editor/editor-form/editor-form.component';
import { ShopListComponent } from './editor/shop-list/shop-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Daterangepicker } from 'ng2-daterangepicker';
import { DaterangepickerComponent } from './editor/daterangepicker/daterangepicker.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditorComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    CampaignviewerComponent,
    PreviewComponent,
    RetailerListComponent,
    EditorFormComponent,
    ShopListComponent,
    DaterangepickerComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    routing,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    Daterangepicker,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    CampaignService,
    UserService,
    AlertService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
