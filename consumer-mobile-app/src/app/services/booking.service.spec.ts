import { TestBed } from '@angular/core/testing';
import { BookingService } from '../services/booking.service';

describe('BookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingService = TestBed.get(BookingService);
    expect(service).toBeTruthy();
  });
});
