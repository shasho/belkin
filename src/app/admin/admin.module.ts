import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminCmsComponent } from './admin-cms.component';
import { AdminRoutingModule } from './admin-routing.module';
import {BelkinBoxListComponent} from './share/belkinbox-list.component';
import {BelkinBoxSaveComponent} from './share/belkinbox-save.component';
import {FormsModule} from '@angular/forms';
import {UploadFileComponent} from './share/upload-file.component';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    FileUploadModule
  ],
  declarations: [
    AdminComponent,
    AdminCmsComponent,
    BelkinBoxListComponent,
    BelkinBoxSaveComponent,
    UploadFileComponent
  ]
})
export class AdminModule {}
