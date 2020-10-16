import {Component, Input, OnInit} from '@angular/core';
import {Day} from '../../../../shared/model/day.model';
import {ActivatedRoute, Router} from '@angular/router';
import {EmotionUtils} from '../../../../shared/config/emotion.constants';

@Component({
  selector: 'app-prediction-day-part',
  templateUrl: './prediction-day-part.component.html',
  styleUrls: ['./prediction-day-part.component.css']
})
export class PredictionDayPartComponent implements OnInit {

  positiveEmotions = [];
  negativeEmotions = [];

  dayPartName: string;
  dayPartQueryParam: string;

  @Input() private day: Day;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.dayPartQueryParam = queryParams.dayPart;

      if (!this.dayPartQueryParam) {
        this.router.navigate([], {
          queryParams: {dayPart: 'morning'}
        });
      } else {
        this.updateEmotions();
      }
    });
  }

  private updateEmotions(): void {
    let emotions;

    switch (this.dayPartQueryParam) {
      default:
      case 'morning':
        this.dayPartName = 'Rano';
        emotions = this.day.morningEmotions;
        break;
      case 'afternoon':
        this.dayPartName = 'Popołudnie';
        emotions = this.day.afternoonEmotions;
        break;
      case 'evening':
        this.dayPartName = 'Wieczór';
        emotions = this.day.eveningEmotions;
        break;
    }

    this.positiveEmotions = EmotionUtils.getPositiveEmotions(emotions);
    this.negativeEmotions = EmotionUtils.getNegativeEmotions(emotions);
  }
}
