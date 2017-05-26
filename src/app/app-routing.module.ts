import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PATH } from './app.constant';

const routes: Routes = [
  { path: PATH.EMPTY, redirectTo: PATH.LOGIN, pathMatch: PATH.MATCHING.FULL },
  { path: PATH.LOGIN, component: LoginComponent },
  { path: PATH.DASHBOARD, component: DashboardComponent }
]

const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule { }
