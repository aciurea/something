import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AdsData, AdsDataService } from '../ads-data.service';

enum AdsSortType {
  name = 'name',
  metric1 = 'metric1',
  metric2 = 'metric2',
  metric3 = 'metric3',
  metric4 = 'metric4',
}

enum SortDirection {
  asc = 'asc',
  desc = 'desc',
  none = 'none',
}

@Component({
  selector: 'app-ads-table',
  templateUrl: './ads-table.component.html',
  styleUrls: ['./ads-table.component.scss'],
})
export class AdsTableComponent implements OnInit, OnDestroy {
  sortType = AdsSortType;
  data: AdsData[] = [] as AdsData[];
  originalData: AdsData[] = [] as AdsData[];

  dataSubscription: Subscription | undefined;

  private originalSortObj = Object.freeze({
    name: SortDirection.asc,
    metric1: SortDirection.none,
    metric2: SortDirection.none,
    metric3: SortDirection.none,
    metric4: SortDirection.none,
  });
  private sortObj = { ...this.originalSortObj } as any;

  constructor(private adsDataService: AdsDataService) { }

  isSorted(column: AdsSortType): boolean {
    const direction = this.sortObj[column];

    return direction !== SortDirection.none;
  }

  getIcon(column: AdsSortType): string {
    switch (this.sortObj[column]) {
      case SortDirection.asc:
        return 'arrow_drop_down';
      case SortDirection.desc:
        return 'arrow_drop_up';
      default:
        return '';
    }
  }

  ngOnInit(): void {
    this.dataSubscription = this.adsDataService
      .getData()
      .subscribe((data: AdsData[]) => {
        this.originalData = [...data];
        this.data = [...data].sort((curr, next) =>
          curr.name.localeCompare(next.name)
        );
      });
  }

  private getSortingDirection(column: string): SortDirection {
    const columnToSort = this.sortObj[column];

    return columnToSort === SortDirection.none
      ? SortDirection.asc
      : columnToSort === SortDirection.asc
        ? SortDirection.desc
        : SortDirection.none;
  }

  sort(column: string) {
    const direction = this.getSortingDirection(column);
    this.sortObj = {
      ...this.originalSortObj,
      name: SortDirection.none,
      [column]: direction,
    };

    this.data =
      direction === SortDirection.none
        ? [...this.originalData]
        : [...this.originalData].sort((curr: any, next: any) => {
          //localeCompare of strings
          if (typeof curr[column] === 'string') {
            return direction === SortDirection.asc
              ? curr[column].localeCompare(next[column])
              : next[column].localeCompare(curr[column]);
          }

          return direction === SortDirection.asc
            ? curr[column] - next[column]
            : next[column] - curr[column];
        });
  }

  search(value: string): void {
    this.data = !value
      ? [...this.originalData]
      : [...this.originalData].filter(
        (data: AdsData) =>
          data.name?.toLocaleLowerCase().includes(value) ||
          String(data.metric1).includes(value) ||
          String(data.metric2).includes(value) ||
          String(data.metric3).includes(value) ||
          String(data.metric4).includes(value)
      );
  }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }
}
