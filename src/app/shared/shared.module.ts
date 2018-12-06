import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalDialogComponent } from './dialog/modal-dialog.component';
import { ConfirmationModalComponent } from './dialog/confirmation-modal.component';
import { DialogService } from './dialog/dialog.service';

@NgModule({
  declarations: [
    ConfirmationModalComponent,
    ModalDialogComponent
  ],
  exports: [
    ConfirmationModalComponent,
    ModalDialogComponent
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
