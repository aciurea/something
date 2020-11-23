import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-ads-filter',
  templateUrl: './ads-filter.component.html',
  styleUrls: ['./ads-filter.component.scss'],
})
export class AdsFilterComponent implements OnInit, OnDestroy {
  @Output() searchEvent = new EventEmitter<string>();

  keyUpSubscription: Subscription | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const input = this.el.nativeElement.querySelector('input');

    this.keyUpSubscription = fromEvent(input, 'keyup')
      .pipe(
        debounceTime(500),
        map((el: any) => el?.target?.value)
      )
      .subscribe((value: string) => this.searchEvent.emit(value));
  }

  ngOnDestroy(): void {
    this.keyUpSubscription?.unsubscribe();
  }
}
