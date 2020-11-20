import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads-table',
  templateUrl: './ads-table.component.html',
  styleUrls: ['./ads-table.component.scss'],
})
export class AdsTableComponent implements OnInit {
  data = [
    {
      objName: 'Object 1',
      m1: 2222,
      m2: 111,
      m3: 0,
      m4: 5,
    },
    {
      objName: 'Object 2',
      m1: 2222,
      m2: 111,
      m3: 0,
      m4: 5,
    },
    {
      objName: 'Object 3',
      m1: 2222,
      m2: 111,
      m3: 0,
      m4: 5,
    },
    {
      objName: 'Object 4',
      m1: 2222,
      m2: 111,
      m3: 0,
      m4: 5,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
