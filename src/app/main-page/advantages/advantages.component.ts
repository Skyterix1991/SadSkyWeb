import {Component, OnInit} from '@angular/core';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faClipboard} from '@fortawesome/free-solid-svg-icons/faClipboard';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {

  faClipboard = faClipboard;
  faEnvelope = faEnvelope;

  constructor() {
  }

  ngOnInit(): void {
  }

}
