import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalDialogComponent } from './dialog/modal-dialog.component';
import { ConfirmationModalComponent } from './dialog/confirmation-modal.component';
import { DialogService } from './dialog/dialog.service';
import { DefaultLayoutComponent } from "./layout/default-layout.component";

@NgModule({
  declarations: [
    ConfirmationModalComponent,
    ModalDialogComponent,
    DefaultLayoutComponent
  ],
  exports: [
    ConfirmationModalComponent,
    ModalDialogComponent,
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DialogService
  ]
})
export class SharedModule { }
