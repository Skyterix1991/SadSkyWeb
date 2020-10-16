import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

@Component({
  selector: 'app-prediction-day-part-navbar',
  templateUrl: './prediction-day-part-navbar.component.html',
  styleUrls: ['./prediction-day-part-navbar.component.css']
})
export class PredictionDayPartNavbarComponent implements OnInit {

  dayParts = [
    {dayPartName: 'Rano', dayPartQueryParam: 'morning'},
    {dayPartName: 'Popołudnie', dayPartQueryParam: 'afternoon'},
    {dayPartName: 'Wieczór', dayPartQueryParam: 'evening'}
  ];

  @ViewChild('menuRef') menuRef: ElementRef;

  menuToggleIcon = faBars;

  private isMenuOpened = true;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  onMenuToggle(): void {
    if (this.isMenuOpened) {
      this.menuToggleIcon = faTimes;
      this.renderer.setStyle(this.menuRef.nativeElement, 'display', 'block');
    } else {
      this.menuToggleIcon = faBars;
      this.renderer.setStyle(this.menuRef.nativeElement, 'display', 'none');
    }

    this.isMenuOpened = !this.isMenuOpened;
  }
}
