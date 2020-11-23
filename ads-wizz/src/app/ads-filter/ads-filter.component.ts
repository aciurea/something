import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, delay, debounce } from 'rxjs/operators';

@Component({
  selector: 'app-ads-filter',
  templateUrl: './ads-filter.component.html',
  styleUrls: ['./ads-filter.component.scss'],
})
export class AdsFilterComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onChange(value: string) {
    this.searchEvent.emit(value);
  }
}
