import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdsData, AdsDataService } from '../ads-data.service';

@Component({
  selector: 'app-ads-table',
  templateUrl: './ads-table.component.html',
  styleUrls: ['./ads-table.component.scss'],
})
export class AdsTableComponent implements OnInit {
  data$: Observable<AdsData> = [] as any;

  constructor(private adsDataService: AdsDataService) {}

  ngOnInit(): void {
    this.data$ = this.adsDataService.getData();
  }
}
