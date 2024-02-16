import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainScreenComponent } from './screen/main-screen/main-screen.component';
import { NavbarComponent } from './screen/navbar/navbar.component';
import { QualificationScreenComponent } from './screen/qualification-screen/qualification-screen.component';
import { CheckComponent } from './screen/check/check.component';

//calendar plugin
import { FullCalendarModule } from '@fullcalendar/angular';
import { ChildComponent } from './screen/intergration/child/child.component';
import { ParentComponent } from './screen/intergration/parent/parent.component';
import { LoginComponent } from './screen/login/login.component';
import { Test1Component } from './screen/test1/test1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MatTableComponent } from './mat-table/mat-table.component';
import { SibilingComponent } from './screen/intergration/sibiling/sibiling.component';
import { FirstComponent } from './screen/intergration/first/first.component';
import { SecondComponent } from './screen/intergration/second/second.component';


@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    NavbarComponent,
    QualificationScreenComponent,
    CheckComponent,
    ChildComponent,
    ParentComponent,
    LoginComponent,
    Test1Component,
    MatTableComponent,
    SibilingComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    AngularMaterialModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
