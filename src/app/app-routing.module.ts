import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/guard/auth.guard';
import {NoAuthGuard} from './shared/guard/no-auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        canLoad: [NoAuthGuard],
        loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
      },
      {
        path: 'profile',
        canLoad: [AuthGuard],
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'dashboard',
        canLoad: [AuthGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: '**',
        redirectTo: 'main'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
