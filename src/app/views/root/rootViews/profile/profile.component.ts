import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // tabs 0 == view profile
  // tabs 1 == edit profile
  // tabs 2 == settings
  settingsTabOpen = 0;

  constructor() { }

  ngOnInit() {
    this.settingsTabOpen = 1;
  }

  toggleSettings(tabIndex: number){
    this.settingsTabOpen = tabIndex;
  }

}
