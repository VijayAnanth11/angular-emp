import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainScreenComponent } from './screen/main-screen/main-screen.component';
import { QualificationScreenComponent } from './screen/qualification-screen/qualification-screen.component';
import { CheckComponent } from './screen/check/check.component';
import { ChildComponent } from './screen/intergration/child/child.component';
import { ParentComponent } from './screen/intergration/parent/parent.component';
import { LoginComponent } from './screen/login/login.component';
import { Test1Component } from './screen/test1/test1.component';
import { SibilingComponent } from './screen/intergration/sibiling/sibiling.component';
import { FirstComponent } from './screen/intergration/first/first.component';
import { SecondComponent } from './screen/intergration/second/second.component';

const routes: Routes = [

  { path: '', component: MainScreenComponent },
  { path: 'qualification', component: QualificationScreenComponent },
  { path: 'check', component: CheckComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'test1', component: Test1Component },
  { path:'sibiling', component:SibilingComponent},
  { path:'first', component:FirstComponent},
  { path:'second', component:SecondComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
