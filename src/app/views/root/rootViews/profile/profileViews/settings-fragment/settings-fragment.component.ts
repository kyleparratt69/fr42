import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-fragment',
  templateUrl: './settings-fragment.component.html',
  styleUrls: ['./settings-fragment.component.css']
})
export class SettingsFragmentComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
