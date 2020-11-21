import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads-header',
  templateUrl: './ads-header.component.html',
  styleUrls: ['./ads-header.component.scss'],
})
export class AdsHeaderComponent implements OnInit {
  menus = [
    'Main Tab',
    'Main Tab',
    'Main Tab',
    'Main Tab',
    'Main Tab',
    'Main Tab',
  ];
  subMenus = [
    'Sub Menu Link',
    'Sub Menu Link',
    'Sub Menu Link',
    'Sub Menu Link',
    'Sub Menu Link',
    'Sub Menu Link',
  ];

  constructor() {}

  ngOnInit(): void {}
}
