import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { BookingNavigationComponent } from './components/booking-navigation/booking-navigation.component';
import { BookingActionComponent } from './components/booking-action/booking-action.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [BookingComponent, BookingFormComponent, BookingNavigationComponent, BookingActionComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
