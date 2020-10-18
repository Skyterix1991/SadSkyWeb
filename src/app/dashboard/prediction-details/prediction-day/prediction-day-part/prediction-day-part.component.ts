import {Component, Input, OnInit} from '@angular/core';
import {Day} from '../../../../shared/model/day.model';
import {ActivatedRoute, Router} from '@angular/router';
import {EmotionUtils} from '../../../../shared/config/emotion.constants';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import {PredictionDayPartService} from './prediction-day-part.service';
import {DAY_PART_HOURS} from '../../../../shared/config/day.constants';

@Component({
  selector: 'app-prediction-day-part',
  templateUrl: './prediction-day-part.component.html',
  styleUrls: ['./prediction-day-part.component.css']
})
export class PredictionDayPartComponent implements OnInit {

  faPlus = faPlusCircle;

  positiveEmotions = [];
  negativeEmotions = [];

  dayPartName: string;
  dayPartQueryParam: string;
  isDayPartEditable: boolean;
  private dayPartNumber: number;

  @Input() private expireDate: number[];
  @Input() private expireDays: number;
  @Input() private wakeHour: number;
  @Input() private day: Day;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private predictionDayPartService: PredictionDayPartService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.dayPartQueryParam = queryParams.dayPart;

      if (!this.dayPartQueryParam) {
        this.router.navigate([], {
          queryParams: {dayPart: 'morning'}
        });
      } else {
        // Set time out to let input day update before calling functions
        setTimeout(__ => {
          this.updateEmotionList();
          this.checkIfPartOfDayExpired();
        });
      }
    });
  }

  private updateEmotionList(): void {
    let emotions;

    switch (this.dayPartQueryParam) {
      default:
      case 'morning':
        this.dayPartName = 'Rano';
        this.dayPartNumber = 0;
        emotions = this.day.morningEmotions;
        break;
      case 'afternoon':
        this.dayPartName = 'Popołudnie';
        this.dayPartNumber = 1;
        emotions = this.day.afternoonEmotions;
        break;
      case 'evening':
        this.dayPartName = 'Wieczór';
        this.dayPartNumber = 2;
        emotions = this.day.eveningEmotions;
        break;
    }

    if (!!emotions) {
      this.positiveEmotions = EmotionUtils.getPositiveEmotions(emotions);
      this.negativeEmotions = EmotionUtils.getNegativeEmotions(emotions);
    }
  }

  onEditEmotions(): void {
    this.predictionDayPartService.predictionDayPartEditModalOpenEvent.emit([...this.positiveEmotions, ...this.negativeEmotions]);
  }

  checkIfPartOfDayExpired(): void {
    // Offset of days for selected day
    const expireDateDayOffset = (this.expireDays - this.day.dayNumber + 1) * 24 * 60 * 60 * 1000;

    // Expire date minus days remaining
    let currentDateOfExpireDate = new Date(
      this.expireDate[0],
      // JS apparently counts months from 0. YES from 0.
      this.expireDate[1] - 1,
      this.expireDate[2],
      0,
      0,
      0
    );
    currentDateOfExpireDate = new Date(currentDateOfExpireDate.getTime() - expireDateDayOffset);


    // Start time offset of hours when day part starts
    const startTimeOffsetInMilliseconds = (this.wakeHour + DAY_PART_HOURS * this.dayPartNumber) * 60 * 60 * 1000;

    // Time start when edit is allowed
    const start = new Date(currentDateOfExpireDate.getTime() + startTimeOffsetInMilliseconds);


    // End time offset of hours when day part ends
    const endTimeOffsetInMilliseconds = (this.wakeHour + DAY_PART_HOURS * this.dayPartNumber + DAY_PART_HOURS) * 60 * 60 * 1000;

    // Deadline for editing
    const end = new Date(currentDateOfExpireDate.getTime() + endTimeOffsetInMilliseconds);

    const currentTime = new Date();

    // Is current time between start and end.
    this.isDayPartEditable = currentTime >= start && currentTime < end;
  }
}
