import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsFilterComponent } from './ads-filter.component';

describe('AdsFilterComponent', () => {
  let component: AdsFilterComponent;
  let fixture: ComponentFixture<AdsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
