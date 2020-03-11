import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTreeModule } from '@angular/material/tree';
import { CdkTreeModule } from '@angular/cdk/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/Input';
import {MatTableModule} from '@angular/material/Table';
import {MatTooltipModule} from '@angular/material/Tooltip';
import { MatPaginatorModule } from '@angular/material';
import {MatSortModule} from '@angular/material/Sort';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatTreeModule,
    CdkTreeModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule
  ],
  providers: [HttpClientModule,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthenticateInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
