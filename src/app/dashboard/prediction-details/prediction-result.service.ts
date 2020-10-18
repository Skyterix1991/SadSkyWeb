import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredictionResultService {

  predictionResultViewModalCloseEvent: EventEmitter<void> = new EventEmitter<void>();
  predictionResultViewModalOpenEvent: EventEmitter<void> = new EventEmitter<void>();

  predictionResultGeneratedEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }
}
