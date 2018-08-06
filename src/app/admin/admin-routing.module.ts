import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminCmsComponent} from './admin-cms.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from '../core/services';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
          { path: '', component: AdminCmsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
