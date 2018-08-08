import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'case-list', component: CaseListComponent, children: [{ path: '', component: HeaderComponent, outlet: 'header' }] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
