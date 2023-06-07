import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxBarcodeScannerModule} from '@eisberg-labs/ngx-barcode-scanner';


import {AppComponent} from './app.component';
import {ScannerComponent} from './scanner/scanner.component';
import {HomeComponent} from './home/home.component';
import {AffichageComponent} from './affichage/affichage.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbTagModule,
  NbButtonModule,
  NbActionsModule, NbCheckboxModule, NbSelectModule, NbAccordionModule, NbTabsetModule, NbIconModule
 } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MatIconModule } from '@angular/material/icon'



const title = 'Home';

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    HomeComponent,
    AffichageComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxBarcodeScannerModule,
    CommonModule,
    MatCardModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'scan', component: ScannerComponent},
      {path: 'affichage', component: AffichageComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'},
    ]),
    NbThemeModule.forRoot({name: 'corporate'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbTagModule,
    NbButtonModule,
    NbActionsModule,
    NbCheckboxModule,
    NbSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    MatIconModule,
    NbAccordionModule,
    NbTabsetModule,
    NbIconModule
  ],
  providers: [{provide: 'A', useValue: title}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
