import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from './notification/notification.service';
import { RouteHistoryService } from './routing/route-history.service';
import { RouteFlattenerService } from './routing/route-flattener.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule, // WINDUP-1579, needed since Angular 4
  ],
  providers: [
    NotificationService,
    RouteHistoryService,
    RouteFlattenerService
  ]
})
export class CoreModule { }
