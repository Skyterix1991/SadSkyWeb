import {Component, OnInit} from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {

  faUser = faUser;

  constructor() {
  }

  ngOnInit(): void {
  }

}
