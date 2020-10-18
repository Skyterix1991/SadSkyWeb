import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredictionDayPartService {

  predictionDayPartEditModalCloseEvent: EventEmitter<void> = new EventEmitter<void>();
  predictionDayPartEditModalOpenEvent: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() {
  }
}
