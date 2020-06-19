import { Component, OnInit } from '@angular/core';
import { WorldTimeApiResponse } from '../../model/world-time-api-response';
import { WorldTimeService } from '../../service/world-time.service';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styles: [
  ]
})
export class ShowTimeComponent implements OnInit {
  worldTime: WorldTimeApiResponse;
  timezones = [
    'Europe/Warsaw',
    'America/New_York',
    'Asia/Tokyo',
    'Australia/Sydney',
    'Africa/Cairo'
  ];
  choice = -1;
  cleanTime: string;

  constructor(
    private worldTimeService: WorldTimeService
  ) { }

  ngOnInit(): void {
  };

  timeButtonOnClick(timezone: string, i: number){
    this.getWorldTime(timezone);
    this.choice = i;
  }

  getWorldTime(timezone: string) {
    this.worldTimeService.getWorldTime(timezone)
      .subscribe((data: WorldTimeApiResponse) => {
        this.worldTime = { ...data };
        this.cleanTime = data.datetime.slice(11,-13);
      });
  }
  

}
