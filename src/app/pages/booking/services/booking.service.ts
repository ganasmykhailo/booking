import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BookingModel} from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private booking: BehaviorSubject<BookingModel> = new BehaviorSubject<BookingModel>(null);
  public $booking = this.booking.asObservable();

  constructor() { }

  public saveBookingData(data: BookingModel) {
    this.booking.next(data);
  }
}
